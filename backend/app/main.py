from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import candidates


description = """
API backend do projeto **Cosplay Score System**.

Responsável por centralizar as operações do sistema, incluindo autenticação,
comunicação com o banco de dados, gerenciamento de candidatos, jurados,
avaliações e classificação do concurso.
"""

app = FastAPI(title = "Cosplay Score System API",
    description = description,
    version = "0.1.0",)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(candidates.router)

@app.get("/")
async def root():
    return {"message": "Hello World" }


