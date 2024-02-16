import React, { createContext, useEffect, useState } from "react";
import { supabase } from "./../config/supabase.js";

const AnuncioContexto = createContext();

const DatosContextoAnuncio = ({ children }) => {
  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialVacio = "";
  const [anuncios, setAnuncios] = useState(valorInicalNull);
  const [errorAnuncio, setErrorAnuncio] = useState(valorInicialFalse);

  const obtenerAnuncios = async () => {
    try {
      const { data, error } = await supabase.from("anuncios").select("*");

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
    <UsuariosContexto.Provider value={datosExportar}>
      {children}
    </UsuariosContexto.Provider>
  );
};

export default DatosContextoAnuncio;

export { AnuncioContexto };
