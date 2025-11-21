import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu/MainMenu.jsx';
import Reservar from './Reservar/Reservar.jsx';
import VerMas from './VerMas/VerMas.jsx';
import {data} from './Informacion/data.json';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



 function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainMenu data = {data}/>} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/vermas" element={<VerMas data = {data}/>} />
      </Routes>

    
    </BrowserRouter>

  );
}

export default App;