// src/components/MainMenu.js
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainMenu.css";
import CarouselDestinos from './CarouselDestinos.jsx';
import Recomendados from './Recomendados.jsx';
import HeaderMain from '../Headers/HeaderMain.jsx';

function MainMenu({data}) {

  return (
    <div>
        <HeaderMain />
        <CarouselDestinos data = {data}/>
        <Recomendados data = {data}/>  
    </div>

  );
}

export default MainMenu;
