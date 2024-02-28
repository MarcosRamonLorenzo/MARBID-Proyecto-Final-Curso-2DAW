import React, { useState, Fragment } from "react";
import Select from "react-select";
import "./FormCreacionOferta.scss";
import useDatosAnuncio from "../../../hooks/useDatosAnuncio.js";
import ModalErrores from "../../modales/ModalErrores.jsx";
import ModalAviso from "../../modales/ModalAviso.jsx";
import AlertError from "../../alerts/AlertError.jsx";
import AlertaSucess from "../../alerts/AlertaSuccess.jsx";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";

const FormCreacionOferta = () => {
  const { categorias, estadoAlertaSuccess, modificarEstadoSuccesAlert } =
    useDatosAnuncios();

  const options = categorias
    ? [
        ...categorias.map((categoria) => ({
          value: categoria.nombre
            ? categoria.nombre
            : "No hay valor disponible",
          label: categoria.nombre
            ? categoria.nombre
            : "No hay valor disponible",
        })),
      ]
    : "No hay categorías disponibles";

  // Valor para mostrar el modal.

  const valorInicialVacio = "";
  const valorInicialAviso = "Los campos de:";
  const valorInicialModal = false;
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
    errorAnuncio,
    manejarEstadoErrorAnuncio,
  } = useDatosAnuncio();

  const manejarInsertOferta = () => {
    // Dos errores principales que si faltan no puedes insertar.
    if (!formularioCreacionOferta.nombre) {
      setError("No has introducido un nombre para la oferta, introduzca uno.");
      setMostrarError(true);
    } else if (!formularioCreacionOferta.precio) {
      setError("No has introducido un precio para la oferta introduzca uno.");
      setMostrarError(true);
    } else if (
      // Campos opcionales.
      !formularioCreacionOferta.descripcion ||
      !formularioCreacionOferta.imagen ||
      !formularioCreacionOferta.categoria
    ) {
      // Si no lo hago así queda muy raro puesto que si repites el formulario con errores sale bugeado.
      setAviso(valorInicialAviso);
      if (!formularioCreacionOferta.categoria) {
        setAviso((prevAviso) => prevAviso + " categoria,");
      }

      if (!formularioCreacionOferta.imagen) {
        setAviso((prevAviso) => prevAviso + " imagen,");
      }

      if (!formularioCreacionOferta.descripcion) {
        setAviso((prevAviso) => prevAviso + " descripción,");
      }

      setMostrarAviso(true);
    } else {
      insertarAnuncio();
    }
  };

  // Función para que en el modal no de errores como insertar dos veces.
  const manejoInsertModal = () => {
    insertarAnuncio();
  };

  return (
    <Fragment>
      {errorAnuncio && (
        <AlertError
          mensajeError={errorAnuncio}
          estadoError={manejarEstadoErrorAnuncio}
        />
      )}
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
              value={formularioCreacionOferta.nombre}
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
              value={formularioCreacionOferta.descripcion}
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
              value={formularioCreacionOferta.precio}
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
              value={{
                // Para que se vea la categoría seleccionada (label) y que si se manda el formulario tenga ese valor (value).
                value: formularioCreacionOferta.categoria,
                label: formularioCreacionOferta.categoria,
              }}
              onChange={(e) => {
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
              value={formularioCreacionOferta.imagen}
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
            insertar={manejoInsertModal}
          />
        )}

        {estadoAlertaSuccess.estado && (
          <AlertaSucess
            mensaje={estadoAlertaSuccess.mensaje}
            funcionEstado={modificarEstadoSuccesAlert}
          />
        )}
      </div>
    </Fragment>
  );
};

export default FormCreacionOferta;
