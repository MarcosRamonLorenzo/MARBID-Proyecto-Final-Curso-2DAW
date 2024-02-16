import { useContext } from "react";
import { AnuncioContexto } from "../contexto/ContextoAnuncio.jsx";

const useDatosAnuncios = () => {
  const contexto = useContext(AnuncioContexto);
  return contexto;
};

export default useDatosAnuncios;
