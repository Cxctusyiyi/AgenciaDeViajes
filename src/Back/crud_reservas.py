from sqlalchemy import text
from .database import engine



def crear_reserva(usuario_id: int, item_id: int, tipo: str):

    with engine.connect() as conn:
        if tipo == "viaje":
            query = text("""
                INSERT INTO reservas (usuario_id, viaje_id)
                VALUES (:usuario_id, :viaje_id)
            """)
            conn.execute(query, {"usuario_id": usuario_id, "viaje_id": item_id})

        elif tipo == "hotel":
            query = text("""
                INSERT INTO reservas (usuario_id, hotel_id)
                VALUES (:usuario_id, :hotel_id)
            """)
            conn.execute(query, {"usuario_id": usuario_id, "hotel_id": item_id})
            
        else:
            raise ValueError("El tipo debe ser 'viaje' o 'hotel'")

        conn.commit()



def listar_reservas():
    with engine.connect() as conn:
        query = text("SELECT * FROM reservas")
        result = conn.execute(query)
        return result.fetchall()
        






