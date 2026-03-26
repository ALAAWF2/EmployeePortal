"""
Sync Missing Employees from Dynamics 365
-----------------------------------------
This script:
1. Fetches employee data from Dynamics 365 (PersonnelNumber, NameAlias, EmploymentStartDate)
2. Finds employees in dynamic_sales_items that are NOT in gofrugal_employee_mapping -> Adds them.
3. Finds employees in gofrugal_employee_mapping who have placeholder names (Name = ID) -> Updates them.

Run manually when needed: python sync_missing_employees.py
"""

import sys
import io
# --- UTF-8 Output Support (Safe for IDLE & CMD) ---
try:
    if hasattr(sys.stdout, 'buffer'):
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
except Exception:
    pass # In IDLE or environments where stdout is already wrapped or mocked

import os
import time
import requests
import pandas as pd
import msal
from dotenv import load_dotenv
from datetime import datetime
import json

# =========================
# DYNAMICS CONFIG
# =========================
TIMEOUT = 120
BASE_URL = (
    "https://orangepax.operations.eu.dynamics.com/data/EmploymentsV2?$expand=Worker"
)

# =========================
# AUTH
# =========================
def get_access_token():
    load_dotenv()

    app = msal.ConfidentialClientApplication(
        client_id=os.getenv("CLIENT_ID"),
        client_credential=os.getenv("CLIENT_SECRET"),
        authority=f"https://login.microsoftonline.com/{os.getenv('TENANT_ID')}",
    )

    token = app.acquire_token_for_client(
        scopes=["https://orangepax.operations.eu.dynamics.com/.default"]
    )

    if "access_token" not in token:
        raise Exception(f"Failed to get token: {token}")

    return token["access_token"]

# =========================
# FETCH FROM DYNAMICS
# =========================
def fetch_all_employees(token):
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/json",
    }

    rows = []
    page = 0
    url = BASE_URL
    start_time = time.time()

    print("📡 Fetching employees from Dynamics 365...")
    
    while url:
        page += 1
        r = requests.get(url, headers=headers, timeout=TIMEOUT)
        r.raise_for_status()

        data = r.json()
        batch = data.get("value", [])
        rows.extend(batch)

        elapsed = time.time() - start_time
        print(f"   Page {page} | Rows {len(batch):,} | Total {len(rows):,} | Time {elapsed:.1f}s")

        url = data.get("@odata.nextLink")

    print(f"✅ Fetched {len(rows):,} employee records from Dynamics\n")
    return rows

# =========================
# SAVE TO JSON
# =========================
def save_to_json(data, output_file="employees.json"):
    # Using ensure_ascii=False to support arabic names correctly
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    print(f"✅ Saved {len(data)} employee records to {output_file}")

# =========================
# MAIN
# =========================
def main():
    print("=" * 60)
    print("🚀 FETCH EMPLOYEES FROM DYNAMICS 365")
    print("=" * 60 + "\n")
    
    try:
        token = get_access_token()
        raw_data = fetch_all_employees(token)
        
        # Save directly to JSON
        save_to_json(raw_data)
        
    except Exception as e:
        print(f"❌ Error during fetch or transform: {e}")
        return

    print("\n" + "=" * 60)
    print("✅ PROCESS COMPLETE!")
    print("=" * 60)

if __name__ == "__main__":
    main()
