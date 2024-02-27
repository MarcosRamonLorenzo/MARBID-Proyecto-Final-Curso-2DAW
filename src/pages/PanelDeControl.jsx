import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./PanelDeControl.scss";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertNoHaySesion from "../components/alerts/AlertNoHaySesion.jsx";
import MenuLateral from "../components/estructura/estructura_panel_control/MenuLateral.jsx";

const PanelDeControl = () => {
  const { sesionIniciada } = useDatosUsuarios();
  return (
    <Fragment>
      {sesionIniciada ? (
        <div className="panel-control">
          <MenuLateral />
          <Outlet />
        </div>
      ) : (
        <AlertNoHaySesion />
      )}
    </Fragment>
  );
};

export default PanelDeControl;
