import React from 'react';
import { useNavigate } from "react-router-dom";
import "./VerMas.css";
import Header from '../Headers/HeaderMain.jsx';

function VerMas({data}) {
  const navigate = useNavigate();
  
  const handleClick = (item) => {
    navigate("/reservar", { state: { item } })
  };

  const viajes = data.filter(item => item.tipo === "viaje");
  const hoteles = data.filter(item => item.tipo === "hotel");

  return(
    <div>
      <Header />
      
      
      <div className="viajesyhoteles-list">               
        {viajes.map((d) => (
          <div key={d.id} className="viajesyhoteles-item" onClick={() => handleClick(d)}>
            <img className='viajesyhoteles-imagen' src={d.foto} alt={d.destino} />
            <h3>{d.destino} - {d.precio}€</h3>
          </div>
        ))}
        {hoteles.map((d) => (
          <div key={d.id} className="viajesyhoteles-item" onClick={() => handleClick(d)}>
            <img className='viajesyhoteles-imagen' src={d.foto} alt={d.nombre} />
            <h3>{d.nombre} - {d.precio_por_noche}€</h3>
          </div>
        ))}            
      </div>
    </div>
  )
}

export default VerMas;