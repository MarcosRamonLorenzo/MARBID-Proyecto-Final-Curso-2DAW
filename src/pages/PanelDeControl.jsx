import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./PanelDeControl.scss";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertNoHaySesion from "../components/alerts/AlertNoHaySesion.jsx";
import MenuLateral from "../components/estructura/estructura_panel_control/MenuLateral.jsx";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import Loading from "../components/estructura/Loading.jsx";
import AlertError from "../components/alerts/AlertError.jsx";

const PanelDeControl = () => {
  const { sesionIniciada, cargandoUsuario } = useDatosUsuarios();
  const { cargandoAnuncio, errorAnuncio, manejarEstadoErrorAnuncio } =
    useDatosAnuncios();
  return (
    <Fragment>
      {sesionIniciada ? (
        <>
          {errorAnuncio && (
            <AlertError
              mensajeError={errorAnuncio}
              estadoError={manejarEstadoErrorAnuncio}
            />
          )}
          {cargandoUsuario && <Loading />}
          {cargandoAnuncio && <Loading />}
          <div className="panel-control">
            <MenuLateral />
            <Outlet />
          </div>
        </>
      ) : (
        <AlertNoHaySesion />
      )}
    </Fragment>
  );
};

export default PanelDeControl;
