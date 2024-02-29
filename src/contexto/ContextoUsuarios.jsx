import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../config/supabase.js";

const UsuariosContexto = createContext();

const ContextoUsuarios = ({ children }) => {
  // Creo la navegación al cerrar sesión o iniciarla.
  const navegar = useNavigate();
  //Patrón para validar el email.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Valores Iniciales;
  const valorInicialFalse = false;
  const valorInicialNull = null;
  const estadoInicialFormulario = {
    email: "",
    password: "",
  };
  const valorInicialVacio = "";

  // Estados.
  const [contrasenyaAuxiliar, setContrasenyaAuxiliar] =
    useState(valorInicialVacio);
  const [estadoRegistro, setEstadoRegistro] = useState(estadoInicialFormulario);
  const [estadoInicioSesion, setEstadoInicioSesion] = useState(
    estadoInicialFormulario
  );

  const [sesionIniciada, setSesionIniciada] = useState(valorInicialFalse);
  const [estadoUsuario, setEstadoUsuario] = useState(valorInicialNull);
  const [errorGeneralUsuario, setErrorGeneralUsuario] =
    useState(valorInicialVacio);
  const [mostrarErrorGeneralUsuario, setMostrarErrorGeneralUsuario] =
    useState(valorInicialFalse);
  const [cargandoUsuario, setCargandoUsuario] = useState(valorInicialFalse);

  //Creamos un objeto con los valores iniciales para el modal de errror.
  const valorInicialError = { error: false, mensaje: "" };
  const valorInicialSuccess = { estado: false, mensaje: "" };

  // Estado para el modal.
  const [estadoErrorAlert, setEstadoErrorAlert] = useState(valorInicialError);

  // Estado para el modal.
  const [estadoErrorInicioSesion, setEstadoErrorInicioSesion] =
    useState(valorInicialError);
  const [estadoErrorRegistro, setEstadoErrorRegistro] =
    useState(valorInicialError);

  const [estadoSuccessAlert, setEstadoSuccessAlert] =
    useState(valorInicialSuccess);

  // Funciones.

  //LogIn.
  //Esto de loginGoogle no funciona aun.
  const logInGoogle = async () => {
    try {
      const { error } = await supabaseConexion.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const comprobarFormularioLogIn = () => {
    // Compruebo si todos los campos están bien metidos.
    if (!emailRegex.test(estadoInicioSesion.email)) {
      //Ponemos el error y lo mostramos.
      setEstadoErrorInicioSesion({
        error: true,
        mensaje: "Por favor, introduce un correo electrónico válido.",
      });
    } else if (!estadoInicioSesion.password) {
      //Ponemos el error y lo mostramos.
      setEstadoErrorInicioSesion({
        error: true,
        mensaje: "Por favor, introduce una contraseña.",
      });
    } else {
      return true;
    }
  };

  const manejarEstadoInicioSesion = (evento) => {
    // Recojo el campo que se está modificando (email o password) y lo voy actualizando.
    const { name, value } = evento.target;
    setEstadoInicioSesion({ ...estadoInicioSesion, [name]: value });
  };

  const manejarInicioSesion = () => {
    if (comprobarFormularioLogIn()) {
      loginUsuario();
      setEstadoInicioSesion(estadoInicialFormulario);
    }
  };

  const loginUsuario = async () => {
    try {
      setCargandoUsuario(true);
      const { error } = await supabaseConexion.auth.signInWithPassword({
        email: estadoInicioSesion.email,
        password: estadoInicioSesion.password,
      });

      if (error) throw error;

      setCargandoUsuario(valorInicialFalse);
      navegar("/");
      setSesionIniciada(true);
      //Muestro la alerta de éxito.
      const nuevoEstado = {
        estado: true,
        mensaje: "Has iniciado sesión correctamente.",
      };
      mostrarAlertaSuccess(nuevoEstado);
    } catch (error) {
      setCargandoUsuario(valorInicialFalse);
      //Comprobamos si el error es por credenciales incorrectas.
      if (error.message === "Invalid login credentials") {
        //Creamos un nuevo estado para el error.Hago esto ya que hacer el set directamente no me actualiza el error por asincronismo.
        const nuevoEstado = {
          ...estadoErrorAlert,
          mensaje: "Usuario o contraseña incorrectos",
          error: true,
        };
        mostrarAlertaError(nuevoEstado);
      } else {
        const nuevoEstado = {
          error: true,
          mensaje: error.message,
        };
        mostrarAlertaError(nuevoEstado);
      }
    }
  };

  //LogOut.

  const logoutUsuario = async () => {
    try {
      setCargandoUsuario(true);
      const { error } = await supabaseConexion.auth.signOut();

      if (error) throw error;

      setCargandoUsuario(valorInicialFalse);
      navegar("/");
      setErrorGeneralUsuario(error.message);
      setMostrarErrorGeneralUsuario(true);
      setSesionIniciada(valorInicialFalse);
      setUsuario(valorInicialNull);
    } catch (error) {
      setCargandoUsuario(valorInicialFalse);
      setErrorGeneralUsuario(error.message);
      setMostrarErrorGeneralUsuario(true);
    }
  };

  //Registro.

  const comprobarFormularioRegistro = () => {
    // Compruebo si todos los campos están bien metidos.
    if (!emailRegex.test(estadoRegistro.email)) {
      setEstadoErrorRegistro({
        error: true,
        mensaje: "Por favor, introduce un correo electrónico válido.",
      });
    } else if (!estadoRegistro.password) {
      setEstadoErrorRegistro({
        error: true,
        mensaje: "Por favor, introduce una contraseña.",
      });
    } else if (contrasenyaAuxiliar !== estadoRegistro.password) {
      setEstadoErrorRegistro({
        error: true,
        mensaje: "Las contraseñas no coinciden.",
      });
    } else {
      return true;
    }
  };

  const modificarEstadoErrorRegistro = (estado) => {
    setEstadoErrorRegistro({ ...estadoErrorRegistro, error: estado });
  };

  const manejarRegistro = () => {
    if (comprobarFormularioRegistro()) {
      registroUsuario();
    }
  };

  const registroUsuario = async () => {
    try {
      setCargandoUsuario(true);
      const { error } = await supabaseConexion.auth.signUp({
        email: estadoRegistro.email,
        password: estadoRegistro.password,
      });

      if (error) throw error;

      setCargandoUsuario(valorInicialFalse);
      navegar("/");
      const nuevoEstado = {
        estado: true,
        mensaje: "Revisa el correo y confirma tu cuenta.",
      };
      mostrarAlertaSuccess(nuevoEstado);
      //Ponemos los valores iniciales de los campos.
      setEstadoRegistro(estadoInicialFormulario);
      setContrasenyaAuxiliar(valorInicialVacio);
    } catch (error) {
      const nuevoEstado = {
        ...estadoErrorAlert,
        mensaje: error.message,
        error: true,
      };
      mostrarAlertaError(nuevoEstado);
      setCargandoUsuario(valorInicialFalse);
    }
  };

  const manejarEstadoRegistro = (evento) => {
    // Recojo el campo que se está modificando (email o password) y lo voy actualizando.
    const { name, value } = evento.target;
    setEstadoRegistro({ ...estadoRegistro, [name]: value });
  };

  const manejarEstadoContrasenyaAuxiliar = (evento) => {
    // Recojo el valor de la contraseña auxiliar.
    const { value } = evento.target;
    setContrasenyaAuxiliar(value);
  };

  //Alerts
  const mostrarAlertaError = (nuevoEstado) => {
    //Establezco el nuevo estado del error.
    setEstadoErrorAlert(nuevoEstado);
    setTimeout(() => {
      setEstadoErrorAlert({ ...nuevoEstado, error: false });
    }, 3000);
  };

  const mostrarAlertaSuccess = (nuevoEstado) => {
    //Establezco el nuevo estado del error.
    setEstadoSuccessAlert(nuevoEstado);
    setTimeout(() => {
      setEstadoSuccessAlert({ ...nuevoEstado, estado: false });
    }, 3000);
  };

  //Funciones de Alerts o modeales para poder modificar el estado de los mismos.
  const modificarEstadoErrorAlert = (estado) => {
    setEstadoErrorAlert({ ...estadoErrorAlert, error: estado });
  };

  const modificarEstadoErrorInicioSesion = (estado) => {
    setEstadoErrorInicioSesion({ ...estadoErrorInicioSesion, error: estado });
  };

  const modificarEstadoSuccesAlert = (estadoAlert) => {
    setEstadoSuccessAlert({ ...estadoSuccessAlert, estado: estadoAlert });
  };

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (evento, session) => {
        if (session) {
          setEstadoUsuario(session.user);
          setSesionIniciada(true);
        } else {
          setSesionIniciada(valorInicialNull);
          setEstadoUsuario(valorInicialNull);
          navegar("/");
        }
      }
    );
  }, []);

  const datosAExportar = {
    estadoRegistro,
    estadoInicioSesion,
    sesionIniciada,
    estadoUsuario,
    errorGeneralUsuario,
    mostrarErrorGeneralUsuario,
    contrasenyaAuxiliar,
    cargandoUsuario,
    estadoErrorAlert,
    estadoErrorInicioSesion,
    estadoSuccessAlert,
    estadoErrorRegistro,
    manejarEstadoRegistro,
    manejarEstadoContrasenyaAuxiliar,
    manejarEstadoInicioSesion,
    manejarInicioSesion,
    logoutUsuario,
    manejarRegistro,
    logInGoogle,
    setEstadoErrorAlert,
    modificarEstadoErrorAlert,
    modificarEstadoErrorInicioSesion,
    modificarEstadoSuccesAlert,
    modificarEstadoErrorRegistro,
  };

  return (
    <UsuariosContexto.Provider value={datosAExportar}>
      {children}
    </UsuariosContexto.Provider>
  );
};

export default ContextoUsuarios;
export { UsuariosContexto };
