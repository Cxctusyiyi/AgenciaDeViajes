from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session 
from sqlalchemy import text
from Back.database import get_db
from Back.crud_usuario import insertar_usuario,listar_usuarios
from typing import Optional

router = APIRouter(prefix="/usuarios", tags=["usuarios"])

class UsuarioCreate(BaseModel):
    usuario: str
    correo: Optional[str] = None
    contraseña: str



@router.get("/")
def get_usuarios(db: Session = Depends(get_db)):
    return listar_usuarios(db)

@router.post("/")
def create_usuario(datos: UsuarioCreate, db: Session = Depends(get_db)):
    insertar_usuario(datos.usuario, datos.correo, datos.contraseña, db)
    return {"mensaje": "Usuario creado correctamente"}

@router.post("/login")
def login_usuario(datos: UsuarioCreate, db: Session = Depends(get_db)):
    usuario_row = db.execute(
        text("SELECT * FROM usuarios WHERE usuario = :usuario AND contraseña = :contraseña"),
        {"usuario": datos.usuario, "contraseña": datos.contraseña}
    ).fetchone()

    if usuario_row:
        user = dict(usuario_row._mapping)
        return {"mensaje": "Login correcto", "usuario": user}

    raise HTTPException(status_code=401, detail="Usuario no encontrado o contraseña incorrecta")