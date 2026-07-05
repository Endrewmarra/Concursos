from datetime import datetime, timedelta, timezone
from pathlib import Path
from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
from pwdlib import PasswordHash
from fastapi.security import OAuth2PasswordBearer
from jwt.exceptions import InvalidTokenError
from dotenv import load_dotenv
from typing import Optional, Annotated
import jwt
import os
import json

ENV_PATH:Path = Path(__file__).resolve().parents[2] / ".env"
load_dotenv(ENV_PATH)

BASE_DIR:Path = Path(__file__).resolve().parent.parent
USERS:Path = BASE_DIR / "mock" / "users.json"

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM","HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "60"))

if SECRET_KEY is None:
    raise RuntimeError("SECRET_KEY não encontrada no arquivo .env")

password_hash = PasswordHash.recommended()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class LoginRequest(BaseModel):
    login: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")



def load_users():
    with open(USERS, "r", encoding="utf-8") as file:
        return json.load(file)

def verify_password(plain_password:str, hashed_password:str)->bool:
    return password_hash.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta:  Optional[timedelta] = None)->str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({'exp':expire})
    encode_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm = ALGORITHM)
    return encode_jwt

async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        login = payload.get("sub")

        if login is None:
            raise credentials_exception

    except InvalidTokenError:
        raise credentials_exception

    users = load_users()

    for user in users:

        if user["login"] == login:

            return {
                "login": user["login"],
                "role": user["role"]
            }



router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login/")
async def login_user(login_data: LoginRequest):
    users = load_users()


    for user in users:
        if user["login"] == login_data.login and verify_password(login_data.password, user["password_hash"]):

            access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

            access_token = create_access_token(data={"sub": user["login"]}, expires_delta = access_token_expires)
            return {
                "message":"Login Successful",
                "access_token":access_token,
                "token_type": "bearer",
                "user":{
                    "login":user["login"],
                    "role":user["role"]
                },
            }
    raise HTTPException(status_code=401, detail="Invalid login or password")

@router.get("/me/")
async def read_current_user(current_user = Depends(get_current_user)):
    return current_user
