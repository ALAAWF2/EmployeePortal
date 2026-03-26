import json
import os

def load_data():
    try:
        with open("employees.json", "r", encoding="utf-8") as f:
            employees = json.load(f)
            if isinstance(employees, dict):
                return employees.get("value", [])
            return employees
    except Exception as e:
        print(f"Error reading employees.json: {e}")
        return []

def load_showroom_mapping():
    try:
        with open("showrooms.json", "r", encoding="utf-8") as f:
            mapping = json.load(f)
            
        # Create a lookup for quick querying by code
        code_to_meta = {}
        for item in mapping:
            manager = item["manager"]
            name = item["name"]
            for code in item["codes"]:
                if code:
                    code_to_meta[code] = {"manager": manager, "name": name, "codes": item["codes"]}
                    
        return mapping, code_to_meta
    except Exception as e:
        print(f"Error reading showrooms.json: {e}")
        return [], {}

def process():
    print("Processing Outlet Mapping and Employees...")
    employees_data = load_data()
    all_mapping, code_to_meta = load_showroom_mapping()

    results = []
    unique_managers = [] # To store unique managers for the MANAGERS JSON

    for emp in employees_data:
        worker = emp.get("Worker", {})
        addr_books = worker.get("AddressBooks", "")
        personnel_num = worker.get("PersonnelNumber", "")
        
        # Prefer NameAlias (Arabic) otherwise fallback to Name
        # Check if NameAlias is missing or just english
        name_alias = worker.get("NameAlias", "")
        name = worker.get("Name", "")
        
        display_name = name_alias if name_alias else name
        
        start_date = emp.get("EmploymentStartDate", "1900-01-01")[:10]
        
        if not addr_books:
            continue
        
        # Track showrooms and managers for the current employee
        employee_showrooms_map = {} # {manager: {showroom_name: {codes: []}}}
        
        for ab in str(addr_books).split(";"):
            ab_clean = ab.strip()
            if ab_clean in code_to_meta:
                meta = code_to_meta[ab_clean]
                mgr = meta["manager"]
                shw_name = meta["name"]

                if mgr not in employee_showrooms_map:
                    employee_showrooms_map[mgr] = {}
                
                if shw_name not in employee_showrooms_map[mgr]:
                    employee_showrooms_map[mgr][shw_name] = {"name": shw_name, "codes": []}
                
                if ab_clean not in employee_showrooms_map[mgr][shw_name]["codes"]:
                    employee_showrooms_map[mgr][shw_name]["codes"].append(ab_clean)
        
        # Determine primary manager and consolidate showroom details
        primary_manager = ""
        my_showrooms = []
        showroom_details = []
        
        if employee_showrooms_map:
            # For simplicity, pick the first manager found as the primary manager
            # In a more complex scenario, you might have rules for this
            primary_manager = list(employee_showrooms_map.keys())[0]
            
            # Collect all showroom names and details for this employee
            for mgr, shw_map in employee_showrooms_map.items():
                if mgr not in [m["username"] for m in unique_managers]:
                    unique_managers.append({"username": mgr, "password": "0000", "outlets": []}) # Outlets will be populated later if needed, or removed if not used.
                
                for shw_name, details in shw_map.items():
                    if shw_name not in my_showrooms: # Avoid duplicate showroom names in the string
                        my_showrooms.append(shw_name)
                    showroom_details.append(details) # Add full details

        if primary_manager: # Only add if a manager was found
            results.append({
                "employeeId": f"{personnel_num}-{display_name}",
                "personnelNumber": personnel_num,
                "name": display_name,
                "startDate": start_date,
                "manager": primary_manager,
                "showroom": " و ".join(my_showrooms), # E.g., "معرض 1 و معرض 2"
                "showroomDetails": showroom_details,
                "addressBooks": addr_books
            })

    print(f"   Filtered down to {len(results)} valid showroom employees.")

    # We export ALL showrooms so the frontend can populate the "Transfer To" dropdown easily
    # Removing duplicates if any
    unique_global_showrooms = []
    shw_names_tracker = set()
    for m in all_mapping:
        if m["name"] not in shw_names_tracker:
            shw_names_tracker.add(m["name"])
            unique_global_showrooms.append({
                "name": m["name"],
                "codes": m["codes"]
            })

    # Sort alphabetically by name
    unique_global_showrooms = sorted(unique_global_showrooms, key=lambda x: x["name"])

    # Prepare JS outputs
    js_content = f"const MANAGERS = {json.dumps(unique_managers, ensure_ascii=False, indent=4)};\n\n"
    js_content += f"const EMPLOYEES = {json.dumps(results, ensure_ascii=False, indent=4)};\n\n"
    js_content += f"const ALL_SHOWROOMS = {json.dumps(unique_global_showrooms, ensure_ascii=False, indent=4)};\n"

    try:
        with open("data.js", "w", encoding="utf-8") as f:
            f.write(js_content)
        print("   Successfully generated data.js")
    except Exception as e:
        print(f"Error writing data.js: {e}")

if __name__ == "__main__":
    process()
