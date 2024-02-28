import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./PanelDeControl.scss";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertNoHaySesion from "../components/estructura/alerts/AlertNoHaySesion.jsx";
import MenuLateral from "../components/estructura/estructura_panel_control/MenuLateral.jsx";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import Loading from "../components/estructura/Loading.jsx";

const PanelDeControl = () => {
  const { sesionIniciada } = useDatosUsuarios();
  const { cargandoAnuncio } = useDatosAnuncios();
  return (
    <Fragment>
      {sesionIniciada ? (
        <>
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
