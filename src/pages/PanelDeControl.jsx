import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
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
          <Nav.Link>
            {" "}
            <Link to={"Favoritos"}>Ofertas creadas </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            {" "}
            <Link to={"Favoritos"}>Ofertas Aplicadas</Link>{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to={"Favoritos"}>Favoritos</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </div>
  );
};

export default PanelDeControl;
