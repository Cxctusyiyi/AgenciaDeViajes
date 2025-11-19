// src/components/CarouselDestinos.js
import React from "react";
import Slider from "react-slick";
import "./CarouselDestinos.css";

// Datos de ejemplo (puedes traerlos luego de tu API FastAPI)
const destinos = [
  { id: 1, nombre: "Hotel Madrid", img: "https://via.placeholder.com/300x200?text=Hotel+Madrid" },
  { id: 2, nombre: "Playa Cancún", img: "https://via.placeholder.com/300x200?text=Playa+Cancun" },
  { id: 3, nombre: "París", img: "https://via.placeholder.com/300x200?text=Paris" },
  { id: 4, nombre: "Roma", img: "https://via.placeholder.com/300x200?text=Roma" },
];

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
        {destinos.map((d) => (
          <div key={d.id} className="slide">
            <img src={d.img} alt={d.nombre} />
            <h3>{d.nombre}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselDestinos;
