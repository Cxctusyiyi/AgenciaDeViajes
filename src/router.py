from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from API import hoteles,reservas,usuarios,viajes


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(usuarios.router)

@app.get("/")
def leer_raiz():
    return {"mensaje": "¡API de Agencia de Viajes funcionando!"}


