import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainMenu from './MainMenu.jsx'
import './App.css'
import CarouselDestinos from './CarouselDestinos.jsx';

function App() {
  return (
    <>
    <MainMenu />
    <CarouselDestinos />
    </>
  );
}

export default App