import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "./../config/supabase.js";

const AnuncioContexto = createContext();

const DatosContextoAnuncio = ({ children }) => {
  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialVacio = "";
  const valorInicialCreacionOferta = {
    id_usuario: "",
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: "",
  };

  const [anuncios, setAnuncios] = useState(valorInicalNull);
  const [errorAnuncio, setErrorAnuncio] = useState(valorInicialFalse);
  const [formularioCreacionOferta, setFormularioCreacionOferta] = useState(
    valorInicialCreacionOferta
  );

  const actualizarDatoFormulario = (evento) => {
    const { name, value } = evento.target;
    setFormularioCreacionOferta({ ...formularioCreacionOferta, [name]: value });
  };

  const actualizarCateogriaFormulario = (evento) => {
    //Aquí no se usa el target.
    const { value } = evento;
    setFormularioCreacionOferta({
      ...formularioCreacionOferta,
      categoria: value,
    });
  };

  const insertarAnuncio = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .insert(formularioCreacionOferta);

      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    console.log(formularioCreacionOferta);
  }, [formularioCreacionOferta]);

  const datosExportar = {
    anuncios,
    errorAnuncio,
    formularioCreacionOferta,
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
  };

  return (
    <AnuncioContexto.Provider value={datosExportar}>
      {children}
    </AnuncioContexto.Provider>
  );
};

export default DatosContextoAnuncio;

export { AnuncioContexto };
