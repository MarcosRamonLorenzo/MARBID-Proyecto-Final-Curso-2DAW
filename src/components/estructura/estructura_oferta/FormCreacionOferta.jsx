import React, { useState } from "react";
import Select from "react-select";
import "./FormCreacionOferta.scss";
import useDatosAnuncio from "../../../hooks/useDatosAnuncio.js";
import ModalErrores from "../../modales/ModalErrores.jsx";
import ModalAviso from "../../modales/ModalAviso.jsx";

const FormCreacionOferta = () => {
  const options = [
    { value: "ArtesGraficas", label: "Artes Gráficas" },
    { value: "MarketingDigital", label: "Marketing Digital" },
    { value: "EscrituraTraduccion", label: "Escritura y Traducción" },
    { value: "VideoAnimación", label: "Video y Animación" },
    { value: "MusicaAudio", label: "Música y Audio" },
    { value: "ProgamacionTecnologia", label: "Programación y Tecnología" },
  ];

  // Valor para mostrar el modal.
  const valorInicialModal = false;
  const valorInicialVacio = "";
  /* Estado para los modales. 
    Lo que hago es diferenciar entre aviso (puedes dejar el campo en null) y errores (no puedes dejar el campo en null). */
  const [mostrarError, setMostrarError] = useState(valorInicialModal);
  const [mostrarAviso, setMostrarAviso] = useState(valorInicialModal);
  const [error, setError] = useState(valorInicialVacio);
  const [aviso, setAviso] = useState(valorInicialVacio);

  const {
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
    formularioCreacionOferta,
  } = useDatosAnuncio();

  const manejarInsertOferta = () => {
    if (!formularioCreacionOferta.nombre) {
      setError("No has introducido un nombre para la oferta, introduzca uno.");
      setMostrarError(true);
    } else if (!formularioCreacionOferta.precio) {
      setError("No has introducido un precio para la oferta introduzca uno.");
      setMostrarError(true);
    } else {
      if (!formularioCreacionOferta.categoria) {
        setAviso(
          "No has seleccionado una categoría para la oferta ¿Deseas continuar?."
        );
        setMostrarAviso(true);
        esperarAConfirmacion();
      }

      if (!formularioCreacionOferta.imagen) {
        setAviso(
          "No has introducido una imagen para la oferta ¿Deseas continuar?."
        );
        setMostrarAviso(true);
        esperarAConfirmacion();
      }

      if (!formularioCreacionOferta.descripcion) {
        setAviso(
          "No has introducido una descripción para la oferta ¿Deseas continuar?."
        );
        setMostrarAviso(true);
        esperarAConfirmacion();
      }

      insertarAnuncio();
    }
  };

  const esperarAConfirmacion = async (decision) => {
    return await decision;
  };

  return (
    <div className="form-creacion-oferta">
      <div className="left-column">
        <div className="nombre-oferta">
          <label className="label" htmlFor="nombreOferta">
            Nombre del Oferta:
          </label>
          <input
            type="text"
            id="nombreOferta"
            name="nombre"
            placeholder="Example Oferta"
            onChange={(e) => {
              actualizarDatoFormulario(e);
            }}
          />
        </div>
        <div className="descripcion-oferta">
          <label className="label" htmlFor="descripcionOferta">
            Descripción de la Oferta:
          </label>
          <textarea
            id="descripcionOferta"
            name="descripcion"
            placeholder="Example Descripción"
            onChange={(e) => {
              actualizarDatoFormulario(e);
            }}
          />
        </div>
        <div className="precio-oferta">
          <label className="label" htmlFor="precioOferta">
            Precio de la Oferta:
          </label>
          <input
            type="number"
            id="precioOferta"
            name="precio"
            min="1"
            step="0.1"
            onChange={(e) => {
              actualizarDatoFormulario(e);
            }}
          />
        </div>
      </div>
      <div className="right-column">
        <div className="categoria-oferta">
          <label htmlFor="categoriaOferta">Selecciona una Categoría:</label>
          <Select
            id="categoriaOferta"
            onChange={(e) => {
              console.log(e);
              actualizarCateogriaFormulario(e);
            }}
            options={options}
          />
        </div>
        <div className="imagen-oferta">
          <label htmlFor="imagenOferta">Imagen de la Oferta:</label>
          <input
            type="text"
            id="imagenOferta"
            name="imagen"
            placeholder="Example URL"
            onChange={(e) => {
              actualizarDatoFormulario(e);
            }}
          />
          <img src="#" alt="" />
        </div>
        <button
          onClick={() => {
            manejarInsertOferta();
          }}
          className="boton-oferta"
        >
          Crear Oferta
        </button>
      </div>
      {mostrarError && (
        <ModalErrores setMostrar={setMostrarError} mensajeError={error} />
      )}
      {mostrarAviso && (
        <ModalAviso
          setMostrar={setMostrarAviso}
          mensajeAviso={aviso}
          aceptarCancelar={esperarAConfirmacion}
        />
      )}
    </div>
  );
};

export default FormCreacionOferta;
