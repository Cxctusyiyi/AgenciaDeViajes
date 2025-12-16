import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu/MainMenu.jsx';
import Reservar from './Reservar/Reservar.jsx';
import VerMas from './VerMas/VerMas.jsx';
import Registro from './Registro/Registro.jsx';
import {data} from './Informacion/data.json';
import users from './Informacion/users.json';
import MisReservas from './MisReservas/MisReservas.jsx';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IniciarSesion from './IniciarSesion/IniciarSesion.jsx';


 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu data = {data}/>} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/vermas" element={<VerMas data = {data}/>} />
        <Route path="/registro" element={<Registro users={users}/>} />
        <Route path="/iniciarsesion" element={<IniciarSesion users ={users}/>} />
        <Route path="/misreservas" element={<MisReservas />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;