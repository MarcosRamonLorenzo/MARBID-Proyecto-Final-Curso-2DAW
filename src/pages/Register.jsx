import React, { Fragment, useState } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import ModalErrores from "../components/modales/ModalErrores.jsx";
import AlertError from "../components/alerts/AlertError.jsx";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Loading from "../components/estructura/Loading.jsx";
import AlertHaySesion from "../components/alerts/AlertHaySesion.jsx";
import { getImagenRandom } from "../biblioteca/funciones.js";
import AlertaSuccess from "../components/alerts/AlertaSuccess.jsx";
import IconoGoogle from "../components/iconos/IconoGoogle.jsx";
import IconoMeta from "../components/iconos/IconoMeta.jsx";
import IconoGitHub from "../components/iconos/IconoGitHub.jsx";

const Register = () => {
  const {
    manejarEstadoRegistro,
    estadoRegistro,
    contrasenyaAuxiliar,
    manejarEstadoContrasenyaAuxiliar,
    manejarRegistro,
    sesionIniciada,
    cargandoUsuario,
    estadoErrorRegistro,
    modificarEstadoErrorRegistro,
    estadoErrorAlert,
    modificarEstadoErrorAlert,
  } = useDatosUsuarios();

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
            className="gridRegister"
            style={{ backgroundImage: `url("${imagenDeFondo}")` }}
          >
            {cargandoUsuario && <Loading />}

            <div className="divFormulario">
              <h1>Registro</h1>
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link to={"/IniciarSesion"}>
                  <strong>Inicia sesión.</strong>
                </Link>
              </p>
              <hr className="hrNormal" />
              <div className="inputFormulario">
                <input
                  required
                  type="text"
                  className="input"
                  name="email"
                  value={estadoRegistro.email}
                  onChange={manejarEstadoRegistro}
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
                  value={estadoRegistro.password}
                  onChange={manejarEstadoRegistro}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Contraseña</label>
              </div>
              <div className="inputFormulario">
                <input
                  required
                  type="password"
                  className="input"
                  name="password"
                  value={contrasenyaAuxiliar}
                  onChange={manejarEstadoContrasenyaAuxiliar}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Repite la contraseña</label>
              </div>
              <button
                onClick={() => {
                  manejarRegistro();
                }}
              >
                Registrarse
              </button>
              <div className="hrOContainer">
                <hr />
                <span>O</span>
              </div>
              <div className="divIniciarSesionCon">
                {/* Imagen Google. */}
                <div>
                  <IconoGoogle />
                  <p>Continuar con Google</p>
                </div>
                {/* Imagen Meta. */}
                <div>
                  <IconoMeta />
                  <p>Continuar con Meta</p>
                </div>
                {/* Imagen GitHub */}
                <div>
                  <IconoGitHub />
                  <p>Continuar con GitHub</p>
                </div>
              </div>
            </div>
            <Link to="/">
              <img src="\src\assets\marbidSVG.svg" alt="" />
            </Link>
            {estadoErrorRegistro.error && (
              <ModalErrores
                setMostrar={modificarEstadoErrorRegistro}
                mensajeError={estadoErrorRegistro.mensaje}
              />
            )}

            {estadoErrorAlert.error && (
              <AlertError
                mensajeError={estadoErrorAlert.mensaje}
                estadoError={modificarEstadoErrorAlert}
              />
            )}
          </div>
        </>
      )}
    </Fragment>
  );
};

export default Register;
