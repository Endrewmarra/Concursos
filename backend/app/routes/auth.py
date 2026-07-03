from pathlib import Path
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from pwdlib import PasswordHash
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jwt.exceptions import InvalidTokenError
import json

password_hash = PasswordHash.recommended()

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    login: str
    password: str



BASE_DIR:Path = Path(__file__).resolve().parent.parent
USERS:Path = BASE_DIR / "mock" / "users.json"


def load_users():
    with open(USERS, "r", encoding="utf-8") as file:
        return json.load(file)

def verify_password(plain_password:str, hashed_password:str)->bool:
    return password_hash.verify(plain_password, hashed_password)


@router.post("/login/")
async def login_user(login_data: LoginRequest):
    users = load_users()

    for user in users:
        if user["login"] == login_data.login and verify_password(login_data.password, user["password_hash"]):
            return {
                "message":"Login Successful",
                "access_token":"...",
                "token_type": "bearer",
                "user":{
                    "login":user["login"],
                    "role":user["role"]
                },
            }
    raise HTTPException(status_code=401, detail="Invalid login or password")

