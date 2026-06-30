from pathlib import Path
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json


router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    login: str
    password: str

BASE_DIR:Path = Path(__file__).resolve().parent.parent
USERS:Path = BASE_DIR / "mock" / "users.json"


def load_users():
    with open(USERS, "r", encoding="utf-8") as file:
        return json.load(file)

@router.post("/login/")
async def login_user(login_data: LoginRequest):
    users = load_users()

    for user in users:
        if user["login"] == login_data.login and user["password"] == login_data.password:
            return {
                "message":"Login Successful",
                "user":{
                    "login":user["login"],
                    "role":user["role"]
                },
            }
    raise HTTPException(status_code=401, detail="Invalid login or password")

