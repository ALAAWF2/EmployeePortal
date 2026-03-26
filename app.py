from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import msal
import os
import subprocess
import json
import sys
import io
from dotenv import load_dotenv

try:
    if hasattr(sys.stdout, 'buffer'):
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
except Exception:
    pass

load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from the browser

# Configuration from environment or defaults
CLIENT_ID = os.getenv("CLIENT_ID", "a1a45bb3-2eeb-4afb-9fc8-efbd7806f156")
CLIENT_SECRET = os.getenv("CLIENT_SECRET", "j2F8Q~Hio09Kj-0V2oFOTVqE.pINiO8z.P9OeaN2")
TENANT_ID = os.getenv("TENANT_ID", "82424b9e-1ea8-4fcc-9dfa-9deada479fa6")
AUTHORITY = f"https://login.microsoftonline.com/{TENANT_ID}"
RESOURCE_URL = os.getenv("RESOURCE_URL", "https://orangepax.operations.eu.dynamics.com")
D365_API_URL = f"{RESOURCE_URL}/data"

def connect_d365():
    msal_app = msal.ConfidentialClientApplication(
        CLIENT_ID, authority=AUTHORITY, client_credential=CLIENT_SECRET)
    result = msal_app.acquire_token_for_client(scopes=[f"{RESOURCE_URL}/.default"])
    if "access_token" in result:
        return result["access_token"]
    raise Exception(f"Failed to obtain token: {result.get('error_description')}")

def get_manager_address_books(manager_name):
    """
    Reads showrooms.json and gets the specific AddressBooks string codes
    that belong to the given manager. (Kept for legacy if needed)
    """
    try:
        with open("showrooms.json", "r", encoding="utf-8") as f:
            mapping = json.load(f)
            
        manager_codes = []
        for item in mapping:
            if item["manager"] == manager_name:
                manager_codes.extend([c for c in item["codes"] if c])
        return manager_codes
    except Exception as e:
        print(f"Error reading showrooms.json: {e}")
        return []

def update_d365_address_books(personnel_num, codes_to_remove, codes_to_add=[]):
    """
    Core function that talks to D365. Fetches the employee, edits the AddressBooks string,
    and PATCHes it back safely.
    """
    token = connect_d365()
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    # Fetch current AddressBooks string
    worker_url = f"{D365_API_URL}/WorkersV2(PersonnelNumber='{personnel_num}')"
    try:
        res = requests.get(worker_url, headers=headers)
        if res.status_code != 200:
            worker_url = f"{D365_API_URL}/Workers(PersonnelNumber='{personnel_num}')"
            res = requests.get(worker_url, headers=headers)
            if res.status_code != 200:
                print("Error GET Worker:", res.text)
                return False, f"Failed to fetch employee {personnel_num}. D365 response: {res.text}"
    except Exception as e:
        return False, str(e)

    data = res.json()
    current_ab = data.get("AddressBooks", "")
    if current_ab is None:
        current_ab = ""

    # Parse and rebuild string
    ab_list = [ab.strip() for ab in current_ab.split(";") if ab.strip()]
    
    # Remove requested codes
    for code in codes_to_remove:
        if code in ab_list:
            ab_list.remove(code)
            
    # Add new codes without duplicating
    for code in codes_to_add:
        if code not in ab_list:
            ab_list.append(code)

    new_ab_string = ";".join(ab_list)

    if new_ab_string == current_ab:
        return True, "No changes needed"

    # Send PATCH Request to Dynamics 365
    patch_payload = {
        "AddressBooks": new_ab_string
    }
    
    headers["If-Match"] = "*"
    
    update_res = requests.patch(worker_url, headers=headers, json=patch_payload)
    if update_res.status_code in [200, 204]:
                
        # Update local JSON so that process_employees.py sees the change without a full sync
        try:
            import json
            with open("employees.json", "r", encoding="utf-8") as f:
                all_emps = json.load(f)
                
            for d in all_emps.get("value", []):
                if str(d.get("PersonnelNumber")) == str(personnel_num):
                    if "Worker" in d:
                        d["Worker"]["AddressBooks"] = new_ab_string
                    break
                    
            with open("employees.json", "w", encoding="utf-8") as f:
                json.dump(all_emps, f, ensure_ascii=False, indent=4)
        except Exception as local_e:
            print("WARNING: Failed to update local employees.json cache:", str(local_e))

        return True, "Success"
    else:
        return False, f"Failed: {update_res.status_code} - {update_res.text}"


@app.route('/remove_employee', methods=['POST', 'OPTIONS'])
def remove_employee():
    if request.method == 'OPTIONS':
        return '', 200
        
    data = request.json
    if not data or 'personnelNumber' not in data:
        return jsonify({"error": "Missing personnelNumber"}), 400
        
    personnel_num = data['personnelNumber']
    
    codes_to_remove = data.get('addressBookCodes', [])
    
    # Fallback to legacy manager logic if specific codes are not provided
    if not codes_to_remove and 'manager' in data:
        manager_name = data['manager']
        codes_to_remove = get_manager_address_books(manager_name)
        if not codes_to_remove:
            return jsonify({"error": "Could not find any address books for this manager"}), 404

    print(f"Removing {personnel_num} from: {codes_to_remove}")
    
    success, msg = update_d365_address_books(personnel_num, codes_to_remove)
    
    if not success:
        return jsonify({"error": msg}), 500

    # Trigger local Python script to regenerate jsons immediately
    try:
        subprocess.Popen(["python", "process_employees.py"])
    except Exception as local_e:
        print("WARNING: D365 Update succeeded but local update failed:", str(local_e))

    return jsonify({
        "status": "success",
        "message": f"Successfully removed address books: {codes_to_remove}"
    }), 200

@app.route('/transfer_employee', methods=['POST', 'OPTIONS'])
def transfer_employee():
    if request.method == 'OPTIONS':
        return '', 200
        
    data = request.json
    if not data or 'personnelNumber' not in data or 'oldAddressBookCodes' not in data or 'newAddressBookCodes' not in data:
        return jsonify({"error": "Missing parameters"}), 400
        
    personnel_num = data['personnelNumber']
    codes_to_remove = data['oldAddressBookCodes']
    codes_to_add = data['newAddressBookCodes']
    
    print(f"Transferring {personnel_num}. Removing {codes_to_remove}, Adding {codes_to_add}")
    
    success, msg = update_d365_address_books(personnel_num, codes_to_remove, codes_to_add)
    
    if not success:
        return jsonify({"error": msg}), 500

    # Trigger local script to regenerate jsons
    try:
        subprocess.Popen(["python", "process_employees.py"])
    except Exception as local_e:
        print("WARNING: D365 Update succeeded but local update failed:", str(local_e))

    return jsonify({
        "status": "success",
        "message": "Transfer successful"
    }), 200

if __name__ == "__main__":
    print("Manager Backend Server Starting on Port 5000...")
    app.run(port=5000, debug=True)
