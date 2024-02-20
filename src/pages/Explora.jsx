import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Anuncios from "../components/estructura/Anuncios.jsx";
import Buscador from "../components/estructura/Buscador.jsx";
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
        <Select options={options} />
      </div>

      <div className="contenedor-anuncios">
        <Anuncios />
      </div>
    </div>
  );
};

export default Explora;
