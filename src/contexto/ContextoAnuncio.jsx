import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "./../config/supabase.js";

const AnuncioContexto = createContext();

const ContextoAnuncio = ({ children }) => {
  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialVacio = "";
  const [anuncios, setAnuncios] = useState(valorInicalNull);
  const [errorAnuncio, setErrorAnuncio] = useState(valorInicialFalse);

  const obtenerAnuncios = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .select("*");

      if (error) {
        setErrorAnuncio(error.message);
      } else {
        setAnuncios(data);
      }
    } catch (error) {
      setErrorAnuncio(error.message);
    }
  };

  useEffect(() => {
    obtenerAnuncios();
  }, []);

  const datosExportar = {
    anuncios,
    errorAnuncio,
  };

  return (
    <AnuncioContexto.Provider value={datosExportar}>
      {children}
    </AnuncioContexto.Provider>
  );
};

export default ContextoAnuncio;
export { AnuncioContexto };
