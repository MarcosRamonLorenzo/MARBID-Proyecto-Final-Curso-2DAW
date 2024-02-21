import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Anuncios from "../components/estructura/estructura_explora/Anuncios.jsx";
import "./Explora.scss";
import Select from "react-select";

const Explora = () => {
  const options = [
    { value: "ArtesGraficas", label: "Artes Gráficas" },
    { value: "MarketingDigital", label: "Markting Digital" },
    { value: "EscrituraTraduccion", label: "Escritura y Traducción" },
    { value: "VideoAnimación", label: "Video y Animación" },
    { value: "MusicaAudio", label: "MusicaAudio" },
    { value: "ProgamacionTecnologia", label: "Progamación y Tecnologia" },
  ];

  return (
    <div className="explora">
      <Cabecera />
      <div className="buscador-y-select">
        <h5>Cateogrias:</h5>
        {/* Aquí haremos los filtros */}
        <Select
          onChange={(e) => {
            console.log(e.value);
          }}
          options={options}
        />
      </div>

      <div className="contenedor-anuncios">
        <Anuncios />
      </div>
    </div>
  );
};

export default Explora;
