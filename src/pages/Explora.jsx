import React, { Fragment } from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import Anuncios from "../components/estructura/estructura_explora/Anuncios.jsx";
import "./Explora.scss";
import Select from "react-select";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import Loading from "../components/estructura/Loading.jsx";
import AlertError from "../components/alerts/AlertError.jsx";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";

const Explora = () => {
  // Por si se selecciona un anuncio.
  const {
    cargandoAnuncio,
    filtrarPorCategoria,
    categorias,
    errorCategoria,
    errorFiltrado,
    manejarEstadoErrorAnuncio,
    manejarEstadoErrorFiltrado,
  } = useDatosAnuncios();

  const { cargandoUsuario } = useDatosUsuarios();

  const options = categorias
    ? [
        // Coloco aquí el por defecto porque si no hay categorias, ya está por defecto en esa opción.
        { value: "", label: "Por defecto" },
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

  return (
    <Fragment>
      <div className="explora">
        {cargandoUsuario && <Loading />}
        {cargandoAnuncio && <Loading />}
        <Cabecera />
        <div className="buscador-y-select">
          <Select
            onChange={(e) => {
              filtrarPorCategoria(e.value);
            }}
            options={options}
            placeholder="Filtrar por categorias"
          />
        </div>

        <div className="contenedor-anuncios">
          <Anuncios />
        </div>
      </div>
      {errorFiltrado && (
        <AlertError
          mensajeError={errorFiltrado}
          estadoError={manejarEstadoErrorFiltrado}
        />
      )}
      {errorCategoria && (
        <AlertError
          mensajeError={errorCategoria}
          estadoError={manejarEstadoErrorAnuncio}
        />
      )}
    </Fragment>
  );
};

export default Explora;
