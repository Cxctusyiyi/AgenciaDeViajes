from sqlalchemy import create_engine,text
from sqlalchemy.orm import sessionmaker, declarative_base


DATABASE_URL = "postgresql://postgres:654931753yL@db.eiigbpvbqmyruvxqszvi.supabase.co:5432/postgres"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def insertar_usuario(usuario, correo, contraseña):
    with engine.connect() as conn:
        query = text("""
            INSERT INTO usuarios (usuario, correo, contraseña)
            VALUES (:usuario, :correo, :contraseña)
        """)
        conn.execute(query, {"usuario": usuario, "correo": correo, "contraseña": contraseña})
        conn.commit()
        
       

def insertar_reserva(usuario_id: int, item_id: int, tipo: str):

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






