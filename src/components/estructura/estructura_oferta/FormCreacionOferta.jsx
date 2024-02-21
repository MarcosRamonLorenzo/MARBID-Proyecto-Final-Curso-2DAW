import React from "react";
import Select from "react-select";
import "./FormCreacionOferta.scss";

const FormCreacionOferta = () => {
  const options = [
    { value: "ArtesGraficas", label: "Artes Gráficas" },
    { value: "MarketingDigital", label: "Markting Digital" },
    { value: "EscrituraTraduccion", label: "Escritura y Traducción" },
    { value: "VideoAnimación", label: "Video y Animación" },
    { value: "MusicaAudio", label: "MusicaAudio" },
    { value: "ProgamacionTecnologia", label: "Progamación y Tecnologia" },
  ];

  return (
    <div className="form-creacion-oferta">
      <div className="left-column">
        <div className="nombre-oferta">
          <label className="label" htmlFor="">
            Nombre del Oferta:
          </label>
          <input type="text" placeholder="Example Oferta" />
        </div>
        <div className="descripcion-oferta">
          <label className="label" htmlFor="">
            Descripción de la Oferta:
          </label>
          <textarea type="text" placeholder="Example Descripción" />
        </div>
        <div className="precio-oferta">
          <label className="label" htmlFor="">
            Precio de la Oferta:
          </label>
          <input type="number" min={1} />
        </div>
      </div>
      <div className="right-column">
        <div className="categoria-oferta">
          <label htmlFor="">Selecciona una Categoría:</label>
          <Select
            onChange={(e) => {
              console.log(e.value);
            }}
            options={options}
          />
        </div>
        <div className="imagen-oferta">
          <label htmlFor="">Imagen de la Oferta:</label>
          <input type="file" placeholder="Example Imagen" />
          <img src="#" alt="" />
        </div>
        <button className="boton-oferta">Crear Oferta</button>
      </div>
    </div>
  );
};

export default FormCreacionOferta;
