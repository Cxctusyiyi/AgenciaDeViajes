import React from 'react';
import "./Reservar.css";
import Header from "../Headers/HeaderMain.jsx";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
function Reservar() {

    const location = useLocation();

    const {item} = location.state || {};  

    const [usuario, setUsuario] = useState(null);
    const [error, setError] = useState(""); 

    useEffect(() => {
    const datosGuardados = localStorage.getItem("usuario");
    if (datosGuardados) {
      setUsuario(JSON.parse(datosGuardados)); 
    }
    else {setUsuario(null)}


    }, []);

    function reservar(){
      
      if(usuario === null){
        setError("Tienes que iniciar sesion para poder reservar");
      }
      else{

        usuario.reservas.push(item)
        localStorage.setItem("usuario", JSON.stringify(usuario))
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
    <button className="reservar-boton" onClick={reservar}>Reservar ahora</button>
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
            <button className="reservar-boton" onClick={reservar}>Reservar ahora</button>  
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>

        </div>
      )}

    
    </div>

  );
}

export default Reservar;

