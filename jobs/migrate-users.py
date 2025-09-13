import csv
import datetime
from pymongo import MongoClient
from firebase_admin import auth, initialize_app, credentials

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

# --- Inizializza Firebase ---
cred = credentials.Certificate("admin-credentials.json")
initialize_app(cred)

# --- Leggi CSV e sincronizza ---
with open('guests.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        first_name = row['first_name']
        last_name = row['last_name']
        email = row['email']
        role = row['role']
        password = row['password']

        print(f"{bcolors.OKBLUE}Processing: {email} - {first_name} {last_name}{bcolors.ENDC}")

        result = users_col.update_one(
            {"email": email},
            {"$setOnInsert": {
                "first_name": first_name,
                "last_name": last_name,
                "role": role,
                "google_registered_at": None
            }},
            upsert=True
        )

        if result.acknowledged:
            if result.matched_count == 0:
                print(f"{bcolors.OKGREEN}[OK] {email} successfully inserted.{bcolors.ENDC}")
            else:
                print(f"{bcolors.WARNING}[SKIP] {email} already existing, skipped.{bcolors.ENDC}")
        else:
            print(f"{bcolors.FAIL}[ERROR] Problems with {email}: {result.raw_result}")

        # Check whether the user has to be registered on Firebase
        user_doc = users_col.find_one({"email": email})
        if not user_doc.get("google_registered_at") or user_doc["google_registered_at"] is None:
            try:
                auth.create_user(email=email, password=password)
                users_col.update_one(
                    {"email": email},
                    {"$set": {"google_registered_at": datetime.datetime.now()}}
                )
                print(f"{bcolors.OKGREEN}[OK] {email} has been registered on Google Firebase.{bcolors.ENDC}")
            except Exception as e:
                print(f"{bcolors.FAIL}[ERROR] {email} registration failed: {e}{bcolors.ENDC}")
        else:
            print(f"{bcolors.WARNING}[SKIP] {email} already registered on Firebase, skipped.{bcolors.ENDC}")