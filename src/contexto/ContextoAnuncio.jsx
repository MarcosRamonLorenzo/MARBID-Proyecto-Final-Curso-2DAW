import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "./../config/supabase.js";
import { useNavigate } from "react-router-dom";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";

const AnuncioContexto = createContext();

const ContextoAnuncio = ({ children }) => {
  const { estadoUsuario } = useDatosUsuarios();

  // Valor inical del anuncio.
  const valorInicalNull = null;
  const valorInicialFalse = false;
  const valorInicialVacio = "";
  const valorInicialSuccess = { estado: false, mensaje: "" };

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
  const [errorAnuncio, setErrorAnuncio] = useState(valorInicialVacio);
  const [formularioCreacionOferta, setFormularioCreacionOferta] = useState(
    valorInicialCreacionOferta
  );
  const [cargandoAnuncio, setCargandoAnuncio] = useState(valorInicialFalse);
  //Estado que alamacena el anuncio seleccionado que se visualizará en la pagina de anuuncio indvidual.
  const [anuncioSeleccionado, setAnuncioSeleccionado] =
    useState(valorInicalNull);
  const [anunciosCreados, setAnunciosCreados] = useState(valorInicalNull);
  const [errorCategoria, setErrorCategoria] = useState(valorInicialVacio);
  const [categorias, setCategorias] = useState(valorInicalNull);
  const [errorFiltrado, setErrorFiltrado] = useState(valorInicialVacio);

  const [estadoAlertaSuccess, setEstadoAlertaSuccess] =
    useState(valorInicialSuccess);

  //Funciones.

  //Alerts

  const modificarEstadoSuccesAlert = (estadoAlert) => {
    setEstadoAlertaSuccess({ ...estadoAlertaSuccess, estado: estadoAlert });
  };

  const mostrarAlertaSuccess = (nuevoEstado) => {
    //Establezco el nuevo estado del error.
    setEstadoAlertaSuccess(nuevoEstado);
    setTimeout(() => {
      setEstadoAlertaSuccess({ ...nuevoEstado, estado: false });
    }, 3000);
  };

  const navegar = useNavigate();

  const manejarEstadoErrorFiltrado = () => {
    setErrorFiltrado(valorInicialVacio);
  };

  const manejarEstadoErrorAnuncio = () => {
    setErrorAnuncio(valorInicialVacio);
  };

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

  const filtrarPorCategoria = async (categoria) => {
    setCargandoAnuncio(true);
    // Si existe categoría que filtre, si no, se ponen los valores por defecto.
    if (categoria) {
      try {
        // Recojo la id de la categoría.
        const idCategoria = await getIDCategoria(categoria);

        if (!idCategoria || idCategoria.length === 0) {
          throw new Error("Categoría no encontrada.");
        }

        const { data, error } = await supabaseConexion
          .from("CATEGORIAS_EN_ANUNCIO")
          .select("id_anuncio(*)")
          .eq("id_categoria", idCategoria);

        //Cogemos los datos de la categoría de la consulta.
        const datosAnucio = data.map((anuncio) => anuncio.id_anuncio);

        setCargandoAnuncio(valorInicialFalse);
        setAnuncios(datosAnucio);
      } catch (error) {
        setCargandoAnuncio(valorInicialFalse);
        setErrorFiltrado(error.message);
      }
    } else {
      obtenerAnuncios();
      setCargandoAnuncio(valorInicialFalse);
    }
  };

  const borrarAnuncio = async (idAnuncio) => {
    try {
      setCargandoAnuncio(true);
      const { data, error } = await supabaseConexion
        .from("ANUNCIO")
        .delete()
        .eq("id", idAnuncio);

      if (error) throw error;

      setCargandoAnuncio(valorInicialFalse);
      mostrarAlertaSuccess({
        estado: true,
        mensaje: "Anuncio eliminado con exito.",
      });
      // Para que se actualicen los anuncios creados por el usuario.
      getAnunciosCreadosDeUsuario();
      // Debido a que no descargamos los anuncios, si se borra uno o varios no recargan y podría dar errores.
      obtenerAnuncios();
    } catch (error) {
      setCargandoAnuncio(valorInicialFalse);
      setErrorAnuncio(error.message);
    }
  };

  const insertarAnuncio = async () => {
    setCargandoAnuncio(true);

    const idAnuncio = self.crypto.randomUUID();

    //Creamos el anuncio a insertar y cogemos la cateogria por separado ya que están en tablas distintas.
    const anuncioAInsertar = {
      id: idAnuncio,
      nombre: formularioCreacionOferta.nombre,
      descripcion: formularioCreacionOferta.descripcion,
      imagen: formularioCreacionOferta.imagen,
      precio: formularioCreacionOferta.precio,
      id_usuario: estadoUsuario.id,
    };

    const categoria = formularioCreacionOferta.categoria;

    try {
      const { error } = await supabaseConexion
        .from("ANUNCIO")
        .insert([anuncioAInsertar]);

      if (error) throw error;

      getAnunciosCreadosDeUsuario();
      setFormularioCreacionOferta(valorInicialCreacionOferta);
      setCargandoAnuncio(valorInicialFalse);
      mostrarAlertaSuccess({
        estado: true,
        mensaje: "Anuncio creado con exito.",
      });
      obtenerAnuncios();

      //Si se ha insertado corretamente añadimos la cateogria al anuncio.
      //Si existre cxateogria y el id de la categoría se añade la categoría al anuncio.
      const idCategoria = categoria ? await getIDCategoria(categoria) : null;

      if (idCategoria) {
        insertarCategoriaEnAnuncio(idAnuncio, idCategoria);
      }
    } catch (error) {
      setErrorAnuncio(error.message);
      setCargandoAnuncio(valorInicialFalse);
    }
  };

  const insertarCategoriaEnAnuncio = async (idAnuncio, idCategoria) => {
    try {
      const { data, error } = await supabaseConexion
        .from("CATEGORIAS_EN_ANUNCIO")
        .insert({ id_anuncio: idAnuncio, id_categoria: idCategoria });

      if (error) throw error;
    } catch (error) {
      setErrorAnuncio(error.message);
      setCargandoAnuncio(valorInicialFalse);
    }
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

  const obtenerCategorias = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("CATEGORIA")
        .select("*");

      if (error) throw error;

      setCategorias(data);
    } catch (error) {
      setErrorCategoria(error.message);
    }
  };

  const getIDCategoria = async (nombreCateogria) => {
    try {
      const { data, error } = await supabaseConexion
        .from("CATEGORIA")
        .select("id")
        .eq("nombre", nombreCateogria);

      if (error) throw error;

      return data[0].id;
    } catch (error) {
      setErrorCategoria(error.message);
    }
  };

  const seleccionarAnuncio = async (idAnuncio) => {
    try {
      setCargandoAnuncio(true);
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
      setCargandoAnuncio(valorInicialFalse);
    } catch (error) {
      setCargandoAnuncio(valorInicialFalse);
      setErrorAnuncio(error.message);
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

  const getAnunciosCreadosDeUsuario = async () => {
    try {
      const { error, data } = await supabaseConexion
        .from("ANUNCIO")
        .select("*")
        .eq("id_usuario", estadoUsuario.id);

      setAnunciosCreados(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerAnuncios();
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (estadoUsuario) {
      getAnunciosCreadosDeUsuario();
    }
  }, [estadoUsuario]);

  const datosExportar = {
    anuncios,
    errorAnuncio,
    formularioCreacionOferta,
    anuncioSeleccionado,
    cargandoAnuncio,
    anunciosCreados,
    errorCategoria,
    categorias,
    estadoAlertaSuccess,
    errorFiltrado,
    borrarAnuncio,
    modificarEstadoSuccesAlert,
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
    seleccionarAnuncio,
    navegar,
    manejarEstadoErrorAnuncio,
    filtrarPorCategoria,
    manejarEstadoErrorFiltrado,
  };

  return (
    <AnuncioContexto.Provider value={datosExportar}>
      {children}
    </AnuncioContexto.Provider>
  );
};

export default ContextoAnuncio;

export { AnuncioContexto };
