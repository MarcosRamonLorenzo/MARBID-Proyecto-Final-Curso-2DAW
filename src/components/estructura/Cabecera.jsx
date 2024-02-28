import React from "react";
import "./Cabecera.scss";
import { Link } from "react-router-dom";
import MenuHamburguesa from "./estructura_home/MenuHamburguesa.jsx";
import useDatosUsuarios from "../../hooks/useDatosUsuarios.js";

const Cabecera = () => {
  const { sesionIniciada, logoutUsuario } = useDatosUsuarios();
  return (
    <div className="cabecera">
      <Link to="/">
        <img src="\src\assets\marbidSVG.svg" alt="" />
      </Link>
      <ul className="navegation">
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/Explora">
          <li>Explora</li>
        </Link>
        {sesionIniciada ? (
          <>
            <Link to="/PanelDeControl/OfertasCreadas">
              <li>Panel De Control</li>
            </Link>
            <button
              onClick={logoutUsuario}
              className="boton-unirse"
              id="logout"
            >
              Cerrar Sesión
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="20"
                height="20"
                style={{ fill: "#FFFFFF" }}
              >
                <g fill="#ffffff" fillRule="nonzero">
                  <g transform="scale(5.33333,5.33333)">
                    <path d="M24,4c-11.046,0 -20,8.954 -20,20c0,11.046 8.954,20 20,20c11.046,0 20,-8.954 20,-20c0,-11.046 -8.954,-20 -20,-20zM31.561,29.439c0.586,0.586 0.586,1.535 0,2.121c-0.293,0.294 -0.677,0.44 -1.061,0.44c-0.384,0 -0.768,-0.146 -1.061,-0.439l-5.439,-5.44l-5.439,5.439c-0.293,0.294 -0.677,0.44 -1.061,0.44c-0.384,0 -0.768,-0.146 -1.061,-0.439c-0.586,-0.586 -0.586,-1.535 0,-2.121l5.44,-5.44l-5.439,-5.439c-0.586,-0.586 -0.586,-1.535 0,-2.121c0.586,-0.586 1.535,-0.586 2.121,0l5.439,5.439l5.439,-5.439c0.586,-0.586 1.535,-0.586 2.121,0c0.586,0.586 0.586,1.535 0,2.121l-5.439,5.439z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </>
        ) : (
          <>
            <Link to="/IniciarSesion">
              <li>Iniciar Sesión</li>
            </Link>

            <Link to="/Registro">
              <button className="boton-unirse">
                Unirse
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </>
        )}
      </ul>
      <div className="menu-hamburguesa">
        <MenuHamburguesa />
      </div>
    </div>
  );
};

export default Cabecera;
