import React from "react";
import "./GridTarjetasDibujos.scss";

const GridTarjetasDibujos = () => {
  return (
    <div className="grid-tarjetas-dibujos">
      <h2>Servicios Populares</h2>
      <div className="contenedor-grid-tarjetas">
        <div className="diseño-grafico-card">
          <img
            src="https://imgs.search.brave.com/SZfIvtMzFEZC_T9DHcc1oAmd5aHoHWtjaFnxpbmgvAo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBkL0dy/ZWF0X1dhdmVfb2Zm/X0thbmFnYXdhMi5q/cGcvNTEycHgtR3Jl/YXRfV2F2ZV9vZmZf/S2FuYWdhd2EyLmpw/Zw"
            alt=""
          />
        </div>
        <div className="wordpress-card">
          <img
            src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/03/que-es-wordpress.png"
            alt=""
          />
        </div>
        <div className="money-card">
          <img
            src="https://elasesorfinanciero.com/wp-content/uploads/2021/04/sostenible-ESG-medio-ambiente.jpg"
            alt=""
          />
        </div>
        <div className="arte-card">
          <img
            src="https://static01.nyt.com/images/2023/05/30/well/30WELL-ART-BRAIN-esp/30WELL-ART-BRAIN-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </div>
        <div className="cine-card">
          <img
            src="https://umb.edu.co/wp-content/uploads/2023/09/cine-y-tv.webp"
            alt=""
          />
        </div>
        <div className="videojuegos-card">
          <img
            src="https://www.egibide.org/file/2023/04/ee1207d6-3037-4199-af15-0cd36327f47f.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GridTarjetasDibujos;
