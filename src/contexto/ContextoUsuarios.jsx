import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../config/supabase.js";

const UsuariosContexto = createContext();

const ContextoUsuarios = ({ children }) => {
  // Creo la navegación al cerrar sesión o iniciarla.
  const navegar = useNavigate();

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
  const [erroresRegistro, setErroresRegistro] = useState(valorInicialVacio);
  const [estadoInicioSesion, setEstadoInicioSesion] = useState(
    estadoInicialFormulario
  );
  const [erroresInicioSesion, setErroresInicioSesion] =
    useState(valorInicialVacio);

  const [sesionIniciada, setSesionIniciada] = useState(valorInicialFalse);
  const [estadoUsuario, setEstadoUsuario] = useState(valorInicialNull);
  const [errorGeneralUsuario, setErrorGeneralUsuario] =
    useState(valorInicialVacio);
  const [mostrarErrorGeneralUsuario, setMostrarErrorGeneralUsuario] =
    useState(valorInicialFalse);
  const [cargandoUsuario, setCargandoUsuario] = useState(valorInicialFalse);

  const manejarEstadoErrorRegister = () => {
    setErroresRegistro(valorInicialVacio);
  };

  const manejarEstadoErrorLogin = () => {
    setErroresInicioSesion(valorInicialVacio);
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

  const manejarEstadoInicioSesion = (evento) => {
    // Recojo el campo que se está modificando (email o password) y lo voy actualizando.
    const { name, value } = evento.target;
    setEstadoInicioSesion({ ...estadoInicioSesion, [name]: value });
  };

  const manejarInicioSesion = () => {
    loginUsuario();

    setEstadoInicioSesion(estadoInicialFormulario);
  };

  const manejarRegistro = () => {
    registroUsuario();

    setEstadoRegistro(estadoInicialFormulario);
    setContrasenyaAuxiliar(valorInicialVacio);
  };

  const registroUsuario = async () => {
    try {
      setCargandoUsuario(true);
      const { data, error } = await supabaseConexion.auth.signUp({
        email: estadoRegistro.email,
        password: estadoRegistro.password,
      });

      if (error) throw error;

      setErroresRegistro(error.message);
      setCargandoUsuario(valorInicialFalse);
      navegar("/");
    } catch (error) {
      setErroresRegistro(error.message);
      setCargandoUsuario(valorInicialFalse);
    }
  };

  const loginUsuario = async () => {
    try {
      setCargandoUsuario(true);
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: estadoInicioSesion.email,
        password: estadoInicioSesion.password,
      });

      if (error) throw error;

      setCargandoUsuario(valorInicialFalse);
      navegar("/");
      setSesionIniciada(true);
    } catch (error) {
      setCargandoUsuario(valorInicialFalse);
      setErroresInicioSesion(error.message);
    }
  };

  const logoutUsuario = async () => {
    try {
      const { error } = await supabaseConexion.auth.signOut();

      if (error) throw error;

      navegar("/");
      setErrorGeneralUsuario(error.message);
      setMostrarErrorGeneralUsuario(true);
      setSesionIniciada(valorInicialFalse);
      setUsuario(valorInicialNull);
    } catch (error) {
      setErrorGeneralUsuario(error.message);
      setMostrarErrorGeneralUsuario(true);
    }
  };

  const logInGoogle = async () => {
    try {
      const { error } = await supabaseConexion.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.log(error);
    }
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
    erroresRegistro,
    estadoInicioSesion,
    erroresInicioSesion,
    sesionIniciada,
    estadoUsuario,
    manejarEstadoRegistro,
    contrasenyaAuxiliar,
    manejarEstadoContrasenyaAuxiliar,
    manejarEstadoInicioSesion,
    manejarInicioSesion,
    errorGeneralUsuario,
    mostrarErrorGeneralUsuario,
    logoutUsuario,
    manejarRegistro,
    logInGoogle,
    manejarEstadoErrorLogin,
    manejarEstadoErrorRegister,
    cargandoUsuario,
  };

  return (
    <UsuariosContexto.Provider value={datosAExportar}>
      {children}
    </UsuariosContexto.Provider>
  );
};

export default ContextoUsuarios;
export { UsuariosContexto };
