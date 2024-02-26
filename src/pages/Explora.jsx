import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Anuncios from "../components/estructura/estructura_explora/Anuncios.jsx";
import "./Explora.scss";
import Select from "react-select";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import Loading from "../components/estructura/Loading.jsx";

const Explora = () => {
  // Por si se selecciona un anuncio.
  const { cargandoAnuncio } = useDatosAnuncios();

  const options = [
    { value: "ArtesGraficas", label: "Artes Gráficas" },
    { value: "MarketingDigital", label: "Markting Digital" },
    { value: "EscrituraTraduccion", label: "Escritura y Traducción" },
    { value: "VideoAnimación", label: "Video y Animación" },
    { value: "MusicaAudio", label: "Musica y Audio" },
    { value: "ProgamacionTecnologia", label: "Progamación y Tecnologia" },
  ];

  return (
    <div className="explora">
      {cargandoAnuncio && <Loading />}
      <Cabecera />
      <div className="buscador-y-select">
        <Select
          onChange={(e) => {
            console.log(e.value);
          }}
          options={options}
          placeholder="Filtrar por categorias"
        />
      </div>

      <div className="contenedor-anuncios">
        <Anuncios />
      </div>
    </div>
  );
};

export default Explora;
