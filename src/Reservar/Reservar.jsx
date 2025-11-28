import React from 'react';
import "./Reservar.css";
import Header from "../Headers/HeaderMain.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
function Reservar() {

    const navigate = useNavigate();

    const location = useLocation();

    const {item} = location.state || {};  

    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState(""); 
    useEffect(() => {
    const datosGuardados = localStorage.getItem("usuario");
    if (datosGuardados) {
      setUsuario(datosGuardados); 
    }
    }, []);

    function reservar(){
      
      if(!usuario){
        setError("Tienes que iniciar sesion para poder reservar");
      }
      else{

        usuario.reservas.append(item)

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
      
   if (!item) {
    return <p>No se seleccionó ningún hotel ni viaje</p>;
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
    <button className="reservar-boton">Reservar ahora</button>
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
            <button className="reservar-boton" onClick={reservar}>Reservar ahora</button>  /* Falta implementar funcionalidad */
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

        </div>
      )}

    
    </div>

  );
}

export default Reservar;

