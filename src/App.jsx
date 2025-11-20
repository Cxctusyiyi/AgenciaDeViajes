import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu.jsx'
import './App.css'
import CarouselDestinos from './CarouselDestinos.jsx';
import Recomendados from './Recomendados.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path= "/MainMenu" element = {<MainMenu />}/>
        <Route path='/IniciarSesion'/>
        <Route path='/LogIn'/>
        <Route path='/TodosLosViajesHoteles'/>
        <Route path='/Hotel/'/>/* Despues de la barra completar segun el viaje que se escoja */
        <Route path='/Viaje/'/>/* Despues de la barra completar segun el hotel que se escoja */
     </Routes>
    </BrowserRouter>

  );
}

export default App