import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Anuncios from "../components/estructura/Anuncios.jsx";
import "./Explora.scss";

const Explora = () => {
  return (
    <div className="explora">
      <Cabecera />
      <div className="contenedor-anuncios">
        <Anuncios />
      </div>
    </div>
  );
};

export default Explora;
