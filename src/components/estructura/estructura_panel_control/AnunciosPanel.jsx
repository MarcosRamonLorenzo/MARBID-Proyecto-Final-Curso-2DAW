import React, { Fragment } from "react";
import Anuncio from "../estructura_explora/Anuncio";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio";
import "./AnunciosPanel.scss";

// El modo del panel cambiará en dependencia de a que subruta entre el usuario.
const AnunciosPanel = ({ ofertasCreadas, modoDelPanel }) => {
  let anuncios = [];
  const { anunciosCreados, seleccionarAnuncio } = useDatosAnuncios();

  if (ofertasCreadas) {
    anuncios = anunciosCreados;
  }

  return (
    <div className="contenedor-anuncios-panel">
      {anunciosCreados && anunciosCreados.length > 0 ? (
        <div
          className="anuncios-panel"
          onClick={(e) => {
            if (e.target.tagName === "IMG") {
              seleccionarAnuncio(e.target.parentNode.id);
            }
          }}
        >
          {anunciosCreados.map((valor, index) => (
            <Anuncio key={index} anuncio={valor} modoEditar={true} />
          ))}
        </div>
      ) : (
        <p className="no-hay-anuncios">No hay anuncios actualmente.</p>
      )}
    </div>
  );
};

export default AnunciosPanel;
