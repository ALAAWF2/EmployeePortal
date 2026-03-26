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

msal_app = msal.ConfidentialClientApplication(CLIENT_ID, authority=AUTHORITY, client_credential=CLIENT_SECRET)
token = msal_app.acquire_token_for_client(scopes=[f'{RESOURCE_URL}/.default'])['access_token']

headers = {'Authorization': f'Bearer {token}', 'Accept': 'application/json'}
url = f'{D365_API_URL}/WorkersV2(PersonnelNumber=\'0488\')'

res = requests.get(url, headers=headers)
if res.status_code == 200:
    data = res.json()
    print("\n" + "="*50)
    print(" بيانات الموظف (NIZAR VYSIAR) ".center(50, "="))
    print("الجدول المتصل به: WorkersV2")
    print("\n--- بعض أسماء الحقول الرئيسية الموجودة في هذا الجدول ---")
    keys = list(data.keys())[:15]
    for k in keys:
        if isinstance(data.get(k), str) and len(data.get(k)) < 30:
            print(f"  > {k} = {data.get(k)}")
        else:
            print(f"  > {k}")
    print("\n--- الحقول التي تهمنا والتفاصيل المسموح للمدير رؤيتها ---")
    print(f"  > PersonnelNumber (رقم الموظف): {data.get('PersonnelNumber')}")
    print(f"  > Name (الاسم): {data.get('Name')}")
    print(f"  > WorksFromHome (يعمل من المنزل): {data.get('WorksFromHome')}")
    print(f"  > Title (المسمى): {data.get('TitleId')}")
    print(f"  > AddressBooks (دفتر العناوين - الحقل المطلوب تعديله حصراً): {data.get('AddressBooks')}")
    print("\n" + "="*50)
    print("كما هو موضح، هذا هو السجل الأساسي للموظف.")
    print("عند تنفيذ الإزالة من قبل المدير، سيقوم السيرفر بإرسال طلب PATCH محدد جداً")
    print("برسالة تحتوي على {'AddressBooks': 'القيم الجديدة'} فقط، مما يعزل باقي المعلومات عن أي خطر.")
else:
    print("Error:", res.status_code, res.text)
