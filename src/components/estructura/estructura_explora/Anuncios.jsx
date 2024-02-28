import React from "react";
import "./Anuncios.scss";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";
import Anuncio from "./Anuncio";
import useDatosUsuarios from "../../../hooks/useDatosUsuarios.js";
import AlertError from "../alerts/AlertError.jsx";

const Anuncios = () => {
  const {
    anuncios,
    errorAnuncio,
    seleccionarAnuncio,
    navegar,
    manejarEstadoErrorAnuncio,
  } = useDatosAnuncios();
  const { sesionIniciada, estadoUsuario, borrarAnuncio } = useDatosUsuarios();
  return (
    <div
      className="anuncios"
      onClick={(e) => {
        if (e.target.tagName === "IMG") {
          if (sesionIniciada && estadoUsuario) {
            //Cojo el id del padre el cual es la id del anuncio seleccionado.
            seleccionarAnuncio(e.target.parentNode.id);
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

      {errorAnuncio && (
        <AlertError
          mensajeError={errorAnuncio}
          estadoError={manejarEstadoErrorAnuncio}
        />
      )}
    </div>
  );
};

export default Anuncios;
