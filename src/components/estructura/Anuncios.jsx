import React from "react";
import "./Anuncios.scss";
import useDatosAnuncios from "../../hooks/useDatosAnuncio.js";
import Anuncio from "./Anuncio";

const Anuncios = () => {
  const { anuncios, errorAnuncio } = useDatosAnuncios();
  return (
    <div className="anuncios">
      {anuncios && anuncios.length > 0 ? (
        anuncios.map((valor, index) => {
          return <Anuncio key={index} anuncio={valor} />;
        })
      ) : (
        <p>No hay anuncios actualmente.</p>
      )}

      {errorAnuncio ? errorAnuncio : ""}
    </div>
  );
};

export default Anuncios;
