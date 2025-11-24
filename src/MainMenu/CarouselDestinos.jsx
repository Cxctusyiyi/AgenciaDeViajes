import React from "react";
import Slider from "react-slick";
import "./CarouselDestinos.css";
import { useNavigate } from "react-router-dom";

function CarouselDestinos({data}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

     const navigate = useNavigate();

    const handleClick = (item) => {
      navigate("/reservar", { state: { item } })
    };

    const viajes = data.filter(item => item.tipo === "viaje");
    const hoteles = data.filter(item => item.tipo === "hotel");


  return (
    <div className="carousel-container">
      <h2>Destinos destacados</h2>
      <Slider {...settings}>
        {viajes.slice(0,5).map((d) => (
          <div key={d.id} className="slide" onClick={() => handleClick(d)}>
            <img src={d.foto} alt={d.nombre} />
            <h3>{d.destino}</h3>
          </div>
        ))}
      </Slider>
    </div>
    
  );
}

export default CarouselDestinos;
