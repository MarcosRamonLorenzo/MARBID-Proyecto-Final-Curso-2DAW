import React from "react";
import Anuncio from "../estructura_explora/Anuncio";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio";

const AnunciosPanel = ({ ofertasCreadas }) => {
  const anuncios = [];
  const { anunciosCreados } = useDatosAnuncios();

  if (ofertasCreadas) {
    anuncios = anunciosCreados;
  }

  return (
    <div className="anuncios">
      {anuncios && anuncios.length > 0 ? (
        anuncios.map((valor, index) => {
          return <Anuncio key={index} anuncio={valor} />;
        })
      ) : (
        <p>No hay anuncios actualmente.</p>
      )}
    </div>
  );
};

export default AnunciosPanel;
