import React from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../config/supabase.js";
const ContextOfUsuarios = createContext();
const ContextoUsuarios = () => {
  //Valores Iniciales;
  const valorInicialSesion = false;
  const valorInicialUsuarioSesion = null;
  const estadoInicialFormulario = {
    email: "",
    password: "",
  };
  const estadoInicialErrores = [];

  const [estadoRegistro, setEstadoRegistro] = useState(estadoInicialFormulario);
  const [erroresRegistro, setErroresRegistro] = useState(estadoInicialErrores);
  const [estadoInicioSesion, setEstadoInicioSesion] = useState(
    estadoInicialFormulario
  );
  const [erroresInicioSesion, setErroresInicioSesion] =
    useState(estadoInicialErrores);

  const [sesionIniciada, setSesionIniciada] = useState(valorInicialSesion);
  const [estadoUsuario, setEstadoUsuario] = useState(valorInicialUsuarioSesion);

  const datosAExportar = {};

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (evento, session) => {
        if (session) {
          setEstadoUsuario(session.user);
          setSesionIniciada(true);
        } else {
          setSesionIniciada(false);
          setEstadoUsuario(valorInicialUsuarioSesion);
          redireccionar("/");
        }
      }
    );
  }, []);

  return (
    <ContextOfUsuarios.Provider value={datosAExportar}>
      {children}
    </ContextOfUsuarios.Provider>
  );
};

export default ContextoUsuarios;
