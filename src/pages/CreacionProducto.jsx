import React, { Fragment } from "react";
import Cabecera from "../components/estructura/Cabecera";
import FormCreacionOferta from "../components/estructura/estructura_oferta/FormCreacionOferta.jsx";
import "./CreacionProducto.scss";
import PrevisualzacionOferta from "../components/estructura/estructura_oferta/PrevisualzacionOferta.jsx";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertNoHaySesion from "../components/estructura/alerts/AlertNoHaySesion.jsx";
import useDatosAnuncios from "../hooks/useDatosAnuncio";
import Loading from "../components/estructura/Loading.jsx";

const CreacionProducto = () => {
  const { sesionIniciada } = useDatosUsuarios();
  const { cargandoAnuncio } = useDatosAnuncios();

  return (
    <Fragment>
      {cargandoAnuncio && <Loading />}
      {sesionIniciada ? (
        <div className="CreacionProducto">
          <Cabecera />
          <div className="contenedor-form-prev">
            <FormCreacionOferta />
            <PrevisualzacionOferta />
          </div>
        </div>
      ) : (
        <>
          <Cabecera />
          <AlertNoHaySesion />
        </>
      )}
    </Fragment>
  );
};

export default CreacionProducto;
