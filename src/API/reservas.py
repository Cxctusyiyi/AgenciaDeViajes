from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from Back.database import get_db
from Back.crud_reservas import crear_reserva, listar_reservas_usuario, eliminar_reserva, obtener_estado_item
from typing import Optional
from pydantic import BaseModel

router = APIRouter(prefix="/misreservas", tags=["misreservas"])

class ReservaCreate(BaseModel):
    usuario_id: int
    id_hotel: Optional[int] = None
    id_viaje: Optional[int] = None
    tipo: str

@router.post("/")
def iniciar_reserva(reserva: ReservaCreate, db: Session = Depends(get_db)):
    
    if reserva.tipo == "hotel":
        crear_reserva(reserva.usuario_id, reserva.id_hotel, 'hotel', db)
        return {"mensaje": "Reserva creada correctamente"}
    else:
        crear_reserva(reserva.usuario_id, reserva.id_viaje, 'viaje', db)
        return {"mensaje": "Reserva creada correctamente"}

@router.get("/")
def get_reservas_usuario(usuario_id: int, db: Session = Depends(get_db)):
    return listar_reservas_usuario(usuario_id, db)

@router.get("/estado/")
def get_estado_item(item_id: int, tipo: str, db: Session = Depends(get_db)):
    return obtener_estado_item(item_id, tipo, db)

@router.delete("/")
def eliminar_reserva_endpoint(reserva_id: int, db: Session = Depends(get_db)):
    eliminar_reserva(reserva_id, db)
    return {"mensaje": "Reserva eliminada correctamente"}

