// src/components/MainMenu.js
import React from "react";
import "./MainMenu.css";

function MainMenu() {
  return (
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
  );
}

export default MainMenu;
