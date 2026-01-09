from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from Back.database import get_db
from Back.crud_viajes import listar_viajes, obtener_viaje
from pydantic import BaseModel

router = APIRouter(prefix="/viajes", tags=["viajes"])

class ViajeBase(BaseModel):
    destino: str
    duracion_dias: int
    precio: float
    incluye: str
    foto: str

@router.get("/")
def get_viajes(db: Session = Depends(get_db)):
    return listar_viajes(db)

@router.get("/{id}")
def get_viaje(id: int, db: Session = Depends(get_db)):
    viaje = obtener_viaje(db, id)
    if not viaje:
        return {"error": "Viaje no encontrado"}
    return viaje

