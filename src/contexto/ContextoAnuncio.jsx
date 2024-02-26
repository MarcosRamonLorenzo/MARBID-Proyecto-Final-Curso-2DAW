import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "./../config/supabase.js";
import { useNavigate } from "react-router-dom";

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
  //Estado que alamacena el anuncio seleccionado que se visualizará en la pagina de anuuncio indvidual.
  const [anuncioSeleccionado, setAnuncioSeleccionado] =
    useState(valorInicalNull);

  //Funciones.

  const navegar = useNavigate();

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
        .insert(anuncioAInsertar, { returning: minimal });

      console.log(data);
      if (error) throw error;

      setFormularioCreacionOferta(valorInicialCreacionOferta);
      setCargandoAnuncio(valorInicialFalse);
      //Actualizo los datos de web.
      obtenerAnuncios();
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

  const seleccionarAnuncio = async (idAnuncio) => {
    try {
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .select("*")
        .eq("id", idAnuncio);

      if (error) throw error;

      const anuncioSeleccionado = data[0];
      //Formateamos la fecha antes de agregarla al estado.
      anuncioSeleccionado.fecha_creacion = formatearFechaHora(
        anuncioSeleccionado.fecha_creacion
      );
      setAnuncioSeleccionado(anuncioSeleccionado);
      //Navegamos a la pagina de anuncio individual.
      //Lo hao aqui ya que así nos esperamos a que el anuncio seleccionado se actualice.
      navegar(`/Anuncio`);
    } catch (error) {
      console.log(error);
      //Si da un error pongo el anuncio a null.
      setErrorAnuncio(valorInicalNull);
    }
  };

  //Funcion para formatear la fecha y hora de los anuncios
  const formatearFechaHora = (cadenaFecha) => {
    const fecha = new Date(cadenaFecha);

    // Formatear la fecha en formato DD/MM/AAAA
    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    // Formatear la hora en formato HH:MM:SS
    const horaFormateada = fecha.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${fechaFormateada} ${horaFormateada}`;
  };

  useEffect(() => {
    obtenerAnuncios();
  }, []);

  useEffect(() => {}, [formularioCreacionOferta]);

  const datosExportar = {
    anuncios,
    errorAnuncio,
    formularioCreacionOferta,
    anuncioSeleccionado,
    cargandoAnuncio,
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
    seleccionarAnuncio,
    navegar,
  };

  return (
    <AnuncioContexto.Provider value={datosExportar}>
      {children}
    </AnuncioContexto.Provider>
  );
};

export default DatosContextoAnuncio;

export { AnuncioContexto };
