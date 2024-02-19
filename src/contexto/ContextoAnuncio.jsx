import React, { createContext, useEffect } from "react";
import { supabase } from "./../config/supabase.js";

const AnuncioContexto = createContext();

const DatosContextoAnuncio = ({ children }) => {
  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialVacio = "";

  const obtenerAnuncios = () => {};

  useEffect(() => {}, []);
  const datosExportar = {};

  return (
    <UsuariosContexto.Provider value={datosExportar}>
      {children}
    </UsuariosContexto.Provider>
  );
};

export default DatosContextoAnuncio;

export { AnuncioContexto };
