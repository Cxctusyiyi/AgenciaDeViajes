from sqlalchemy import text
from sqlalchemy.orm import Session
from .database import engine

def crear_reserva(usuario_id: int, item_id: int, tipo: str, db: Session):

    if tipo == "viaje":
        query = text("""
            INSERT INTO reservas (usuario_id, viaje_id)
            VALUES (:usuario_id, :viaje_id)
        """)
        db.execute(query, {"usuario_id": usuario_id, "viaje_id": item_id})

    elif tipo == "hotel":
        query = text("""
            INSERT INTO reservas (usuario_id, hotel_id)
            VALUES (:usuario_id, :hotel_id)
        """)
        db.execute(query, {"usuario_id": usuario_id, "hotel_id": item_id})
        
    else:
        raise ValueError("El tipo debe ser 'viaje' o 'hotel'")

    db.commit()



def listar_reservas():
    with engine.connect() as conn:
        query = text("SELECT * FROM reservas")
        result = conn.execute(query)
        return result.fetchall()
        

def listar_reservas_usuario(usuario_id: int, db: Session):
    query = text("""
        SELECT 
            r.id,
            r.usuario_id,
            COALESCE(v.id, h.id) as item_id,
            COALESCE(v.destino, h.nombre) as nombre_item,
            COALESCE(v.foto, h.foto) as foto,
            CASE WHEN v.id IS NOT NULL THEN 'viaje' ELSE 'hotel' END as tipo,
            COALESCE(v.precio, h.precio_por_noche) as precio
        FROM reservas r
        LEFT JOIN viajes v ON r.viaje_id = v.id
        LEFT JOIN hoteles h ON r.hotel_id = h.id
        WHERE r.usuario_id = :usuario_id
    """)
    result = db.execute(query, {"usuario_id": usuario_id}).fetchall()
    return [dict(row._mapping) for row in result]




