import csv
from pymongo import MongoClient

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


# --- Config MongoDB ---
client = MongoClient("mongodb://root:example@localhost:27017/")
db = client['vividi']
users_col = db['users']

enabled_emails = [
    "lorenzo.sarasino@ottonovembre.it",
    "sibilla.sagristano@ottonovembre.it"
]

# --- Leggi CSV e sincronizza ---
with open('new-guests.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        is_enabled = row['email'] in enabled_emails
        first_name = row['first_name']
        last_name = row['last_name']
        email = row['email']

        print(f"{bcolors.OKBLUE}Processing: {email} - {first_name} {last_name}{bcolors.ENDC}")

        result = users_col.update_one(
            {"email": email},
            {"$set": {
                "is_enabled": is_enabled
            }},
            upsert=True
        )

        if result.acknowledged:
            if result.matched_count == 1:
                print(f"{bcolors.OKGREEN}[OK] {email} successfully updated.{bcolors.ENDC}")
            else:
                print(f"{bcolors.WARNING}[SKIP] {email} already existing, skipped.{bcolors.ENDC}")
        else:
            print(f"{bcolors.FAIL}[ERROR] Problems with {email}: {result.raw_result}")