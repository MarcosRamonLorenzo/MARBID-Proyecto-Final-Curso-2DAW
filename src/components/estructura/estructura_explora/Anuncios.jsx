import React from "react";
import "./Anuncios.scss";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";
import Anuncio from "./Anuncio";
import useDatosUsuarios from "../../../hooks/useDatosUsuarios.js";

const Anuncios = () => {
  const { anuncios, errorAnuncio, seleccionarAnuncio, navegar } =
    useDatosAnuncios();
  const { sesionIniciada, estadoUsuario } = useDatosUsuarios();
  return (
    <div
      className="anuncios"
      onClick={(e) => {
        if (e.target.tagName === "IMG") {
          if (sesionIniciada && estadoUsuario) {
            //Cogo el id del padre el cual es la id del anuncio seleccionado.
            seleccionarAnuncio(e.target.parentNode.id);
            //navegar("/Anuncio");
          } else {
            navegar("/IniciarSesion");
          }
        }
      }}
    >
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
