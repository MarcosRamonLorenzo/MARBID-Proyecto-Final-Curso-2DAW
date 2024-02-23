import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "./../config/supabase.js";

const AnuncioContexto = createContext();

const DatosContextoAnuncio = ({ children }) => {
  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialCreacionOferta = {
    id_usuario: "",
    nombre: "",
    descripcion: "",
    imagen: "",
    precio: "",
    categoria: "",
  };

  // Estados del anuncio.
  const [anuncios, setAnuncios] = useState(valorInicalNull);
  const [errorAnuncio, setErrorAnuncio] = useState(valorInicialFalse);
  const [formularioCreacionOferta, setFormularioCreacionOferta] = useState(
    valorInicialCreacionOferta
  );
  const [cargandoAnuncio, setCargandoAnuncio] = useState(valorInicialFalse);

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
    setCargandoAnuncio(true);
    //Creamos el anuncio a insertar y cogemos la cateogria por separado ya que están en tablas distintas.
    const anuncioAInsertar = {
      nombre: formularioCreacionOferta.nombre,
      descripcion: formularioCreacionOferta.descripcion,
      imagen: formularioCreacionOferta.imagen,
      precio: formularioCreacionOferta.precio,
      id_usuario: null,
    };

    const categoria = formularioCreacionOferta.categoria;

    try {
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .insert(anuncioAInsertar);

      if (error) throw error;

      setFormularioCreacionOferta(valorInicialCreacionOferta);
      setCargandoAnuncio(valorInicialFalse);
    } catch (error) {
      console.log(error);
    }

    //Como cogemos el id del anuncio si se genera en suapabase.
    /*   try {
      const { data, error } = await supabaseConexion
      .from("CATEGORIAS_EN_ANUNCIO")
      .insert();
    } catch (error) {
      
    } */
  };

  const obtenerAnuncios = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .select("*");

      if (error) throw error;

      setAnuncios(data);
    } catch (error) {
      setErrorAnuncio(error.message);
    }
  };

  useEffect(() => {
    obtenerAnuncios();
  }, []);

  useEffect(() => {}, [formularioCreacionOferta]);

  const datosExportar = {
    anuncios,
    errorAnuncio,
    formularioCreacionOferta,
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
    cargandoAnuncio,
  };

  return (
    <AnuncioContexto.Provider value={datosExportar}>
      {children}
    </AnuncioContexto.Provider>
  );
};

export default DatosContextoAnuncio;

export { AnuncioContexto };
