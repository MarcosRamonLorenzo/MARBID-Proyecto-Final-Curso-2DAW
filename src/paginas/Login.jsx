import React, { Fragment } from "react";
import "./Login.css";

const Login = () => {
  return (
    <Fragment>
      <div className="gridLogin">
        <p>Logo</p>
        <div className="divFormulario">
          <h1>Inicio de sesión</h1>
          <p>
            ¿Eres un nuevo usuario? <strong>Crear una cuenta.</strong>
          </p>
          <hr />
          <div className="inputFormulario">
            <input required type="text" class="input" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>
          <div className="inputFormulario">
            <input required type="text" class="input" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Contraseña</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
