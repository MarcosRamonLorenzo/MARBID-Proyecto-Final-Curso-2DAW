import React, { Fragment } from "react";
import "./Anuncios.scss";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";
import Anuncio from "./Anuncio";
import useDatosUsuarios from "../../../hooks/useDatosUsuarios.js";
import AlertError from "../../alerts/AlertError.jsx";

const Anuncios = () => {
  const {
    anuncios,
    errorAnuncio,
    seleccionarAnuncio,
    navegar,
    manejarEstadoErrorAnuncio,
  } = useDatosAnuncios();
  const { sesionIniciada, estadoUsuario } = useDatosUsuarios();
  return (
    <Fragment>
      {anuncios && anuncios.length > 0 ? (
        <div
          className="anuncios"
          onClick={(e) => {
            if (e.target.tagName === "IMG") {
              if (sesionIniciada && estadoUsuario) {
                //Cojo el id del padre el cual es la id del anuncio seleccionado.
                seleccionarAnuncio(e.target.parentNode.id, true);
              } else {
                navegar("/IniciarSesion");
              }
            }
          }}
        >
          {anuncios.map((valor, index) => (
            <Anuncio key={index} anuncio={valor} />
          ))}
        </div>
      ) : (
        <p className="no-hay-anuncios">No hay anuncios actualmente.</p>
      )}
      {errorAnuncio && (
        <AlertError
          mensajeError={errorAnuncio}
          estadoError={manejarEstadoErrorAnuncio}
        />
      )}
    </Fragment>
  );
};

export default Anuncios;
