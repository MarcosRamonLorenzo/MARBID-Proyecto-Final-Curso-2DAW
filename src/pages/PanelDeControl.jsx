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

const PanelDeControl = () => {
  const { sesionIniciada } = useDatosUsuarios();
  return (
    <Fragment>
      {sesionIniciada ? (
        <div className="panel-control">
          <Cabecera />
          <Tabs
            defaultActiveKey="profile"
            id="tabs-panel-control"
            className="mb-3"
            justify
          >
            <Tab
              eventKey="ofertasCreadas"
              title="
          Ofertas Creadas"
            >
              <OfertasCreadas />
            </Tab>
            <Tab
              eventKey="ofertasAplicadas"
              title="
          Ofertas Aplicadas"
            >
              <OfertasAplicadas />
            </Tab>
            <Tab
              eventKey="favoritos"
              title="
          Favoritos"
            >
              <Favoritos />
            </Tab>
          </Tabs>
          <Outlet />
        </div>
      ) : (
        <div>
          <Cabecera />
          <AlertNoHaySesion />
        </div>
      )}
    </Fragment>
  );
};

export default PanelDeControl;
