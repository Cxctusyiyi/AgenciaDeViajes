from sqlalchemy import text
from sqlalchemy.orm import Session


def insertar_usuario(usuario: str, correo: str, contraseña: str, db: Session):
    query = text("""
        INSERT INTO usuarios (usuario, correo, contraseña)
        VALUES (:usuario, :correo, :contraseña)
    """)
    db.execute(query, {"usuario": usuario, "correo": correo, "contraseña": contraseña})
    db.commit()


def listar_usuarios(db: Session):
    result = db.execute(text("SELECT * FROM usuarios")).fetchall()
    return [dict(row._mapping) for row in result]


       
























