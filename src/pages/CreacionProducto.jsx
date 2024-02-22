import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import FormCreacionOferta from "../components/estructura/estructura_oferta/FormCreacionOferta.jsx";

import "./CreacionProducto.scss";
import PrevisualzacionOferta from "../components/estructura/estructura_oferta/PrevisualzacionOferta.jsx";

const CreacionProducto = () => {
  return (
    <div className="CreacionProducto">
      <Cabecera />
      <div className="contenedor-form-prev">
        <FormCreacionOferta />
        <PrevisualzacionOferta />
      </div>
    </div>
  );
};

export default CreacionProducto;
