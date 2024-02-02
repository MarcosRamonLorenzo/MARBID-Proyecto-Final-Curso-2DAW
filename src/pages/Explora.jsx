import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Buscador from "../components/estructura/Buscador.jsx";
import Insignias from "../components/estructura/Insignias.jsx";
import Servicios from "../components/estructura/Servicios.jsx";

const Explora = () => {
  return (
    <div>
      <Cabecera />
      <Buscador />
      <Servicios />
      <Insignias />
    </div>
  );
};

export default Explora;
