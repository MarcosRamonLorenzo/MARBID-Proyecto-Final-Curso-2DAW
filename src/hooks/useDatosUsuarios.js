import { useContext } from "react";
import { UsuariosContexto } from "../contexto/ContextoUsuarios.jsx";

const useDatosUsuarios = () => {
  const contexto = useContext(UsuariosContexto);
  return contexto;
};

export default useDatosUsuarios;
