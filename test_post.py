import requests
import msal
import os
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
TENANT_ID = os.getenv("TENANT_ID")
AUTHORITY = f'https://login.microsoftonline.com/{TENANT_ID}'
RESOURCE_URL = os.getenv("RESOURCE_URL", "https://orangepax.operations.eu.dynamics.com")
D365_API_URL = f'{RESOURCE_URL}/data'

msal_app = msal.ConfidentialClientApplication(
    CLIENT_ID, authority=AUTHORITY, client_credential=CLIENT_SECRET)
token = msal_app.acquire_token_for_client(scopes=[f'{RESOURCE_URL}/.default'])['access_token']

headers = {
    'Authorization': f'Bearer {token}',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

url = f'{D365_API_URL}/WorkersV2'

payload = {
    "PersonnelNumber": "TEST999",
    "NameAlias": "TEST EMPLOYEE EN",
    "Name": "TEST EMPLOYEE AR",
    "FirstName": "TEST EMPLOYEE",
    "AddressBooks": "1011-C",
    "WorkerType": "Employee",
    "LegalEntityId": "ORNG"
}

print("POSTing to", url)
res = requests.post(url, headers=headers, json=payload)
print("Status Code:", res.status_code)
print("Response:", res.text)
