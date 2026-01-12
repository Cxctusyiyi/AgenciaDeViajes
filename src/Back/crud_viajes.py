from sqlalchemy import text
from sqlalchemy.orm import Session


def listar_viajes(db: Session):
    result = db.execute(text("SELECT * FROM viajes")).fetchall()
    return [dict(row._mapping) for row in result]


def obtener_viaje(db: Session, id: int):
    result = db.execute(text("SELECT * FROM viajes WHERE id = :id"), {"id": id}).fetchone()
    if result:
        return dict(result._mapping)
    return None


def crear_viaje(destino: str, duracion_dias: int, precio: float, incluye: str, foto: str, db: Session):
    query = text("""
        INSERT INTO viajes (destino, duracion_dias, precio, incluye, foto)
        VALUES (:destino, :duracion_dias, :precio, :incluye, :foto)
    """)
    db.execute(query, {
        "destino": destino,
        "duracion_dias": duracion_dias,
        "precio": precio,
        "incluye": incluye,
        "foto": foto
    })
    db.commit()

























