import React from 'react';
import { useNavigate } from "react-router-dom";
import "./VerMas.css";


function VerMas({data}) {
   const handleClick = (item) => {
      navigate("/reservar", { state: { item } });
    };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
  };
    const viajes = data.filter(item => item.tipo === "viaje");
    const hoteles = data.filter(item => item.tipo === "hotel");

  return(

    <div>
    <header className='viajesyhoteles-container'>
      <button className="back-button" onClick={handleBack}>◀</button>
      <div className="logo">🌍 TravelApp</div>      
       <h1>Hoteles y viajes</h1>      
      <div className="actions">
        <button className="login">Iniciar sesión</button>
        <button className="cart">🛒 Carrito</button>
      </div>
    </header>
    
    <div className="filtros"> "Filtros para viajes"</div>
    
    <div className="viajesyhoteles-list">               
                    {viajes.map((d) => (

                        <div key={d.id} className="viajesyhoteles-item">
                        <img className='viajesyhoteles-imagen' src={d.foto} alt={d.nombre}  onClick={() => handleClick(d)}/>
                        <h3>{d.destino} - {d.precio}€</h3>
                        </div>
                    ))}
                    {hoteles.map((d) => (

                        <div key={d.id} className="viajesyhoteles-item">
                        <img className='viajesyhoteles-imagen' src={d.foto} alt={d.nombre}  onClick={() => handleClick(d)}/>
                        <h3>{d.nombre} - {d.precio_por_noche}€</h3>
                        </div>
                    ))}            
    </div>
           

    </div>
    
  )

}



export default VerMas;