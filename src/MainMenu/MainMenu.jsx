// src/components/MainMenu.js
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainMenu.css";
import CarouselDestinos from './CarouselDestinos.jsx';
import Recomendados from './Recomendados.jsx';
function MainMenu() {
  return (
    <div>
    <header className="main-menu">
     
      <div className="logo">🌍 TravelApp</div>

      
      <div className="search">
        <input type="text" placeholder="Buscar destinos o hoteles..." />
        <button>🔍</button>
      </div>

      
      <div className="actions">
        <button className="login">Iniciar sesión</button>
        <button className="cart">🛒 Carrito</button>
      </div>

    </header>
        <CarouselDestinos />
        <Recomendados />  
    </div>

  );
}

export default MainMenu;
