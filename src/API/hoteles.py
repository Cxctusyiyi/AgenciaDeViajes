from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from Back.database import get_db
from Back.crud_hoteles import listar_hoteles, obtener_hotel
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/hoteles", tags=["hoteles"])

class HotelBase(BaseModel):
    nombre: str
    precio_por_noche: float
    servicios: str
    estrellas: int
    foto: str

@router.get("/")
def get_hoteles(db: Session = Depends(get_db)):
    return listar_hoteles(db)

@router.get("/{id}")
def get_hotel(id: int, db: Session = Depends(get_db)):
    hotel = obtener_hotel(db, id)
    if not hotel:
        return {"error": "Hotel no encontrado"}
    return hotel
