import requests
import msal
import os
import json
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
TENANT_ID = os.getenv("TENANT_ID")
AUTHORITY = f'https://login.microsoftonline.com/{TENANT_ID}'
RESOURCE_URL = os.getenv("RESOURCE_URL", "https://orangepax.operations.eu.dynamics.com")
D365_API_URL = f'{RESOURCE_URL}/data'

msal_app = msal.ConfidentialClientApplication(CLIENT_ID, authority=AUTHORITY, client_credential=CLIENT_SECRET)
token = msal_app.acquire_token_for_client(scopes=[f'{RESOURCE_URL}/.default'])['access_token']

headers = {'Authorization': f'Bearer {token}', 'Accept': 'application/json'}

def try_get(endpoint):
    res = requests.get(f'{D365_API_URL}/{endpoint}?$top=1', headers=headers)
    print(f"--- {endpoint} ---")
    print(res.status_code)
    try:
        if res.status_code == 200:
            print(json.dumps(res.json(), indent=2)[:500])
        else:
            print(res.text[:200])
    except:
        pass

try_get("CommissionSalesGroups")
try_get("CommissionSalesGroupV2s")
try_get("SalesReps")
try_get("CommissionSalesRepGroups")
try_get("CommissionSalesRepresentatives")
