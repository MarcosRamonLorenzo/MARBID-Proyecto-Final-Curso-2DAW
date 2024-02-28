import React, { Fragment, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertError from "../components/alerts/AlertError.jsx";
import ModalErrores from "../components/modales/ModalErrores.jsx";
import Loading from "../components/estructura/Loading.jsx";
import Cabecera from "../components/estructura/Cabecera.jsx";
import AlertHaySesion from "../components/alerts/AlertHaySesion.jsx";
import { getImagenRandom } from "../biblioteca/funciones.js";
import IconoGitHub from "../components/iconos/IconoGitHub.jsx";
import IconoGoogle from "../components/iconos/IconoGoogle.jsx";
import IconoMeta from "../components/iconos/IconoMeta.jsx";

const Login = () => {
  const {
    manejarEstadoInicioSesion,
    estadoInicioSesion,
    manejarInicioSesion,
    logInGoogle,
    cargandoUsuario,
    sesionIniciada,
    estadoErrorAlert,
    estadoErrorInicioSesion,
    modificarEstadoErrorAlert,
    modificarEstadoErrorInicioSesion,
  } = useDatosUsuarios();

  // Verifica si el email es válido o no lo es.

  // Selecciona la imagen de fondo según un número aleatorio.
  const [imagenDeFondo] = useState(getImagenRandom());

  return (
    <Fragment>
      {sesionIniciada ? (
        <>
          <Cabecera />
          <AlertHaySesion />
        </>
      ) : (
        <>
          <div
            className="container-login"
            style={{ backgroundImage: `url("${imagenDeFondo}")` }}
          >
            <Link to="/">
              <img src="\src\assets\marbidSVG.svg" alt="" />
            </Link>
            <div className="divFormulario">
              <h1>Inicio de sesión</h1>
              <p>
                ¿Eres un nuevo usuario?{" "}
                <Link to={"/Registro"}>
                  <strong>Crear una cuenta.</strong>
                </Link>
              </p>
              <hr className="hrNormal" />
              <div className="inputFormulario">
                <input
                  required
                  type="text"
                  className="input"
                  name="email"
                  value={estadoInicioSesion.email}
                  onChange={manejarEstadoInicioSesion}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
              </div>
              <div className="inputFormulario">
                <input
                  required
                  type="password"
                  className="input"
                  name="password"
                  value={estadoInicioSesion.password}
                  onChange={manejarEstadoInicioSesion}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Contraseña</label>
              </div>
              <button
                onClick={() => {
                  manejarInicioSesion();
                }}
              >
                Entrar
              </button>
              <div className="hrOContainer">
                <hr />
                <span>O</span>
              </div>
              <div className="divIniciarSesionCon">
                {/* Imagen Google. */}
                <div>
                  <IconoGoogle />
                  <p
                    onClick={() => {
                      //logInGoogle();
                    }}
                  >
                    Continuar con Google
                  </p>
                </div>
                {/* Imagen Meta. */}
                <div>
                  <IconoMeta />
                  <p>Continuar con Meta</p>
                </div>
                <div>
                  <IconoGitHub />
                  <p>Continuar con GitHub</p>
                </div>
              </div>
              <p>
                ¿Has olvidado la contraseña? <strong>Recupérala aquí.</strong>
              </p>
            </div>

            {cargandoUsuario && <Loading />}
            {estadoErrorAlert.error && (
              <AlertError
                mensajeError={estadoErrorAlert.mensaje}
                estadoError={modificarEstadoErrorAlert}
              />
            )}

            {estadoErrorInicioSesion.error && (
              <ModalErrores
                mensajeError={estadoErrorInicioSesion.mensaje}
                setMostrar={modificarEstadoErrorInicioSesion}
              />
            )}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Login;
