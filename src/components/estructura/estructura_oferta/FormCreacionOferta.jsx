import React from "react";
import Select from "react-select";

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
      <div className="imagen-oferta">
        <label htmlFor="">Imagen de la Oferta</label>
        <input type="file" placeholder="Example Imagen" />
        <img src="#" alt="" />
      </div>
      <div className="nombre-oferta">
        <label htmlFor="">Nombre del Oferta</label>
        <input type="text" placeholder="Example Oferta" />
      </div>
      <div className="descripcion-oferta">
        <label htmlFor="">Nombre del Oferta</label>
        <input type="text" placeholder="Example Descripción" />
      </div>
      <div className="cateogria-oferta">
        <label htmlFor="">Selecciona una Categoría</label>
        <Select
          onChange={(e) => {
            console.log(e.value);
          }}
          options={options}
        />
      </div>
      <div className="precio-oferta">
        <label htmlFor="">Precio de la Oferta</label>
        <input type="number" min={1} />
      </div>
      <button>Crear Oferta</button>
    </div>
  );
};

export default FormCreacionOferta;
