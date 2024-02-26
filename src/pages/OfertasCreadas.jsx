import React from "react";
import AnunciosPanel from "../components/estructura/estructura_panel_control/AnunciosPanel";
import "./OfertasCreadas.scss";

const OfertasCreadas = () => {
  return (
    <div className="pagina-ofertas-creadas">
      <h1>Ofertas Creadas </h1>
      <AnunciosPanel />
    </div>
  );
};

export default OfertasCreadas;
