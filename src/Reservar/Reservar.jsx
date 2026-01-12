import React from 'react';
import "./Reservar.css";
import Header from "../Headers/HeaderMain.jsx";
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';

const API_URL = "http://127.0.0.1:8000";

function Reservar() {

    const location = useLocation();
    const navigate = useNavigate();

    const {item} = location.state || {};  

    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);
    const [itemReservado, setItemReservado] = useState(false);

    useEffect(() => {
    const datosGuardados = localStorage.getItem("usuario");
    if (datosGuardados) {
      try {
        setUsuario(JSON.parse(datosGuardados));
      } catch (e) {
        setUsuario(null);
      }
    }
    else {setUsuario(null)}


    }, []);

    useEffect(() => {
      if (item) {
        const verificarEstado = async () => {
          try {
            const tipo = item.tipo === "viaje" ? "viaje" : "hotel";
            const response = await fetch(`${API_URL}/misreservas/estado?item_id=${item.id}&tipo=${tipo}`);
            if (response.ok) {
              const data = await response.json();
              setItemReservado(data.reservado);
            }
          } catch (err) {
            console.error('Error verificando estado:', err);
          }
        };
        verificarEstado();
      }
    }, [item]);

    async function reservar(){
      
      if(usuario === null){
        setError("Tienes que iniciar sesión para poder reservar");
        return;
      }

      if(!item){
        setError("No hay item para reservar");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const tipo = item.tipo === "viaje" ? "viaje" : "hotel";
        const id_item = item.id;

        const response = await fetch(`${API_URL}/misreservas`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            usuario_id: usuario.id,
            id_hotel: tipo === "hotel" ? id_item : null,
            id_viaje: tipo === "viaje" ? id_item : null,
            tipo: tipo
          })
        });

        const data = await response.json();

        if(response.ok){
          setError("");
          alert("¡Reserva realizada con éxito!");
          navigate("/");
        } else {
          setError(data.detail || "Error al realizar la reserva");
        }
      } catch (err) {
        console.error("Error en reserva:", err);
        setError("Error de conexión al servidor");
      } finally {
        setLoading(false);
      }
    }


    function Estrellas({ valor }) {
      const estrellas = [];

      for (let i = 1; i <= 5; i++) {
        estrellas.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: i <= valor ? "#FFD700" : "#ccc", marginRight: "4px" }}
          />
        );
      }

      return <div>{estrellas}</div>;
    }
    

  return (
    <div>
      
      <Header />

     {item.destino && (

  <div className="reservar-contenido">
  <div className="reservar-imagen-container">
    <img
      src={item.foto}
      alt={item.destino}
      className="reservar-imagen"
    />
  </div>

  <div className="reservar-detalles">
    <h2 className="reservar-titulo">{item.destino}</h2>
    <ul className="reservar-lista">
      <li><strong>Duración:</strong> {item.duracion_dias} días</li>
      <li><strong>Precio:</strong> {item.precio } €</li>
      <li>
        <strong>{ "Incluye:" }</strong>{" "}
        {item.incluye }
      </li>
    </ul>
    <button 
      className="reservar-boton" 
      onClick={reservar} 
      disabled={loading || itemReservado}
      style={{
        backgroundColor: itemReservado ? '#cccccc' : '',
        cursor: itemReservado ? 'not-allowed' : 'pointer'
      }}
    >
      {itemReservado ? "Reservado" : loading ? "Reservando..." : "Reservar ahora"}
    </button>
    {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
</div>


      )}

      {item.nombre && (
        <div className="reservar-contenido">
          <div className="reservar-imagen-container">
            <img
              src={item.foto}
              alt={item.nombre }
              className="reservar-imagen"
            />
          </div>

          <div className="reservar-detalles">
            <h2 className="reservar-titulo">{item.nombre }</h2>
            <ul className="reservar-lista">
              <li><strong>Precio por noche:</strong> {item.precio_por_noche} €</li>
              <li>
                <strong>{"Servicios:"}</strong>{" "}
                {item.servicios.join(", ")}
              </li>
              <li><strong>Valoracion </strong> <Estrellas valor = {item.estrellas}/>  </li>
            </ul>
            <button 
              className="reservar-boton" 
              onClick={reservar} 
              disabled={loading || itemReservado}
              style={{
                backgroundColor: itemReservado ? '#cccccc' : '',
                cursor: itemReservado ? 'not-allowed' : 'pointer'
              }}
            >
              {itemReservado ? "Reservado" : loading ? "Reservando..." : "Reservar ahora"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

        </div>
      )}

    
    </div>

  );
}

export default Reservar;

