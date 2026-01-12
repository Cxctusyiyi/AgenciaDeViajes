from sqlalchemy import text
from sqlalchemy.orm import Session


def listar_hoteles(db: Session):
    result = db.execute(text("SELECT * FROM hoteles")).fetchall()
    return [dict(row._mapping) for row in result]


def obtener_hotel(db: Session, id: int):
    result = db.execute(text("SELECT * FROM hoteles WHERE id = :id"), {"id": id}).fetchone()
    if result:
        return dict(result._mapping)
    return None


def crear_hotel(nombre: str, precio_por_noche: float, servicios: str, estrellas: int, foto: str, db: Session):
    query = text("""
        INSERT INTO hoteles (nombre, precio_por_noche, servicios, estrellas, foto)
        VALUES (:nombre, :precio_por_noche, :servicios, :estrellas, :foto)
    """)
    db.execute(query, {
        "nombre": nombre,
        "precio_por_noche": precio_por_noche,
        "servicios": servicios,
        "estrellas": estrellas,
        "foto": foto
    })
    db.commit()
















