import requests
import msal
import os
import xml.etree.ElementTree as ET
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

headers = {'Authorization': f'Bearer {token}'}

print("Fetching metadata...")
res = requests.get(f'{D365_API_URL}/$metadata', headers=headers)

if res.status_code == 200:
    with open("metadata.xml", "w", encoding="utf-8") as f:
        f.write(res.text)
    print("Metadata saved to metadata.xml")
else:
    print("Error fetching metadata:", res.status_code)
