from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from Back.database import get_db
from Back.crud_usuario import insertar_usuario,listar_usuarios

router = APIRouter(prefix="/usuarios", tags=["usuarios"])

class UsuarioCreate(BaseModel):
    usuario: str
    correo: str
    contraseña: str



@router.get("/")
def get_usuarios(db: Session = Depends(get_db)):
    return listar_usuarios(db)

@router.post("/")
def create_usuario(datos: UsuarioCreate, db: Session = Depends(get_db)):
    insertar_usuario(datos.usuario, datos.correo, datos.contraseña, db)
    return {"mensaje": "Usuario creado correctamente"}
