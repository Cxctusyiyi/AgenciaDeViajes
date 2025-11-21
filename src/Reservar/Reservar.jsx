import React from 'react';
import "./Reservar.css";
import { useNavigate } from "react-router-dom";

function Reservar() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
    <header className='reservas-container'>
      <button className="back-button" onClick={handleBack}>◀</button>
      <div className="logo">🌍 TravelApp</div>      
       <h1>Página de Reserva</h1>      
      <div className="actions">
        <button className="login">Iniciar sesión</button>
        <button className="cart">🛒 Carrito</button>
      </div>
    </header>

    <div className='reservas-info'>         
    
      
           

    </div>
    </div>
  );
}

export default Reservar;

