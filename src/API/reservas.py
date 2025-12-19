from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from Back.database import get_db
from Back.crud_reservas import crear_reserva, listar_reservas

router = APIRouter(prefix="/misreservas", tags=["misreservas"])


@router.post("/")
def iniciar_reserva(id_usuario: int, id_hotel: int , id_viaje: int ,tipo: str , db:Session = Depends(get_db) ):
    
    if(tipo=="hotel"):
        crear_reserva(id_usuario,id_hotel, 'hotel')
        return {"mensaje":"Reserva creada correctamente"}

    else:
        crear_reserva(id_usuario,id_viaje, 'viaje')
        return {"mensaje":"Reserva creada correctamente"}

@router.get("/")
def get_reservas():
    return listar_reservas()



