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
          height="4em"
          width="4em"
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
            id="XMLID_314_"
          />
          <path
            d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
            id="XMLID_315_"
          />
          <path
            d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
            id="XMLID_316_"
          />
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
