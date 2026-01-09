import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu/MainMenu.jsx';
import Reservar from './Reservar/Reservar.jsx';
import VerMas from './VerMas/VerMas.jsx';
import Registro from './Registro/Registro.jsx';
import MisReservas from './MisReservas/MisReservas.jsx';
import Cart from './Cart/Cart.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IniciarSesion from './IniciarSesion/IniciarSesion.jsx';

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [viajes, hoteles] = await Promise.all([
          fetch(`${API_URL}/viajes`).then(r => r.json()),
          fetch(`${API_URL}/hoteles`).then(r => r.json())
        ]);
        
        const combinedData = [
          ...viajes.map(v => ({ ...v, tipo: "viaje" })),
          ...hoteles.map(h => ({ ...h, tipo: "hotel" }))
        ];
        setData(combinedData);
      } catch (err) {
        console.error('Error cargando datos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu data={data}/>} />
        <Route path="/reservar" element={<Reservar />} />
        <Route path="/vermas" element={<VerMas data={data}/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/misreservas" element={<MisReservas />} /> 
        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;