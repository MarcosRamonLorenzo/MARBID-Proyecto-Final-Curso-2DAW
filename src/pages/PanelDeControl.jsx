import React, { Fragment } from "react";
import Cabecera from "../components/estructura/Cabecera";
import { Tabs, Tab } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./PanelDeControl.scss";
import Favoritos from "../components/estructura/estructura_panel_control/Favoritos.jsx";
import OfertasAplicadas from "../components/estructura/estructura_panel_control/OfertasAplicadas.jsx";
import OfertasCreadas from "../components/estructura/estructura_panel_control/OfertasCreadas.jsx";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertNoHaySesion from "../components/estructura/alerts/AlertNoHaySesion.jsx";
import MenuLateral from "../components/estructura/estructura_panel_control/MenuLateral.jsx";

const PanelDeControl = () => {
  const { sesionIniciada } = useDatosUsuarios();
  return (
    <Fragment>
      <div className="panel-control">
        <MenuLateral />
        <Outlet />
      </div>
    </Fragment>
  );
};

export default PanelDeControl;
