import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu.jsx'
import './App.css'
import CarouselDestinos from './CarouselDestinos.jsx';
import Recomendados from './Recomendados.jsx';

function App() {
  return (
    <>
    <MainMenu />
    <CarouselDestinos />
    <Recomendados />
    </>
  );
}

export default App