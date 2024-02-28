import React from "react";
import Anuncio from "../estructura_explora/Anuncio";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio";
import "./AnunciosPanel.scss";

const AnunciosPanel = ({ ofertasCreadas }) => {
  let anuncios = [];
  const { anunciosCreados, seleccionarAnuncio } = useDatosAnuncios();

  if (ofertasCreadas) {
    anuncios = anunciosCreados;
  }

  return (
    <div
      className="anuncios-panel"
      onClick={(e) => {
        if (e.target.tagName === "IMG") {
          seleccionarAnuncio(e.target.parentNode.id);
        }
      }}
    >
      {anunciosCreados && anunciosCreados.length > 0 ? (
        anunciosCreados.map((valor, index) => {
          return <Anuncio key={index} anuncio={valor} modoEditar={true} />;
        })
      ) : (
        <p>No hay anuncios actualmente.</p>
      )}
    </div>
  );
};

export default AnunciosPanel;
