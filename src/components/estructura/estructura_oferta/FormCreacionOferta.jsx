import React from "react";
import Select from "react-select";
import "./FormCreacionOferta.scss";
import useDatosAnuncio from "../../../hooks/useDatosAnuncio.js";

const FormCreacionOferta = () => {
  const options = [
    { value: "ArtesGraficas", label: "Artes Gráficas" },
    { value: "MarketingDigital", label: "Marketing Digital" },
    { value: "EscrituraTraduccion", label: "Escritura y Traducción" },
    { value: "VideoAnimación", label: "Video y Animación" },
    { value: "MusicaAudio", label: "Música y Audio" },
    { value: "ProgamacionTecnologia", label: "Programación y Tecnología" },
  ];

  const {
    actualizarDatoFormulario,
    actualizarCateogriaFormulario,
    insertarAnuncio,
  } = useDatosAnuncio();

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
            insertarAnuncio();
          }}
          className="boton-oferta"
        >
          Crear Oferta
        </button>
      </div>
    </div>
  );
};

export default FormCreacionOferta;
