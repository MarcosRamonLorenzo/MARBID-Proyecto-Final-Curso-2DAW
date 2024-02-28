import React from "react";
import AnunciosPanel from "../components/estructura/estructura_panel_control/AnunciosPanel";
import "./OfertasCreadas.scss";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import AlertaSucess from "../components/alerts/AlertaSuccess.jsx";

const OfertasCreadas = () => {
  const { estadoAlertaSuccess, modificarEstadoSuccesAlert } =
    useDatosAnuncios();
  return (
    <div className="pagina-ofertas-creadas">
      <h1>Ofertas Creadas </h1>
      <AnunciosPanel />
      {/* Alerta de eliminación de producto. */}
      {estadoAlertaSuccess.estado && (
        <AlertaSucess
          mensaje={estadoAlertaSuccess.mensaje}
          funcionEstado={modificarEstadoSuccesAlert}
        />
      )}
    </div>
  );
};

export default OfertasCreadas;
