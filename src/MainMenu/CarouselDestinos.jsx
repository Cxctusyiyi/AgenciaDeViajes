// src/components/CarouselDestinos.js
import React from "react";
import Slider from "react-slick";
import "./CarouselDestinos.css";
import {viajes} from '../viajes.json';
// Datos de ejemplo (puedes traerlos luego de tu API FastAPI)

function CarouselDestinos() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <h2>Destinos destacados</h2>
      <Slider {...settings}>
        {viajes.slice(0,5).map((d) => (
          <div key={d.id} className="slide">
            <img src={d.foto} alt={d.nombre} />
            <h3>{d.destino}</h3>
          </div>
        ))}
      </Slider>
    </div>
    
  );
}

export default CarouselDestinos;
