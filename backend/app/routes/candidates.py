from fastapi import APIRouter
from pathlib import Path
import json


router = APIRouter()

BASE_DIR:Path = Path(__file__).resolve().parent.parent
CANDIDATES_FILE:Path = BASE_DIR / "mock" / "candidates.json"

@router.get("/candidates/", tags=["candidates"])
async def read_candidates():
    with open(CANDIDATES_FILE, "r", encoding="utf-8") as file:
        candidates:json = json.load(file)

    return candidates



