import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuHamburguesa.scss";

const MenuHamburguesa = () => {
  const estadoInicialMenu = false;
  const [estadoMenu, setEstadoMenu] = useState(estadoInicialMenu);

  return (
    /* Si esta falso sale el icon odel menú si no sale el link */
    <div className="contenedor-menu-hamburguesa">
      {estadoMenu === false && (
        <svg
          onClick={() => {
            setEstadoMenu(true);
          }}
          className="icono-menu-hamburguesa"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      )}
      {estadoMenu && (
        <div className="manu-hambuerguesa-open">
          <div
            onClick={() => {
              setEstadoMenu(false);
            }}
            className="cerrar-menu"
          >
            X
          </div>
          <div className="elementos-menu">
            <Link to="/">Home</Link>
            <Link to="/Explora">Explora</Link>
            <Link to="/IniciarSesion">Iniciar Sesión</Link>
            <Link to="/Registro">Registro</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuHamburguesa;
