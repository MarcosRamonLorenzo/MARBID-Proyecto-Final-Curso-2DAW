import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import Nav from "react-bootstrap/Nav";
import "./PanelDeControl.scss";

const PanelDeControl = () => {
  return (
    <div className="panel-control">
      <Cabecera />
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        id="nav-panel-control"
      >
        <Nav.Item>
          <Nav.Link href="#">Ofertas Creadas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Ofertas Aplicadas </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Favoritos</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default PanelDeControl;
