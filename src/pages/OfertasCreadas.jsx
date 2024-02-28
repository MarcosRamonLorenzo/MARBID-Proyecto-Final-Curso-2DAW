import React, { useState } from "react";
import AnunciosPanel from "../components/estructura/estructura_panel_control/AnunciosPanel";
import "./OfertasCreadas.scss";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import AlertaSucess from "../components/alerts/AlertaSuccess.jsx";
import ModalConfirmacion from "../components/modales/ModalConfirmacion.jsx";
import ModalEditar from "../components/modales/ModalEditar.jsx";

const OfertasCreadas = () => {
  const { estadoAlertaSuccess, modificarEstadoSuccesAlert, borrarAnuncio } =
    useDatosAnuncios();

  // Valores iniciales.
  const valorInicialFalse = false;
  const valorInicialVacio = "";
  const [mostrarConfirmacionBorrar, setMostrarConfirmacionBorrar] =
    useState(valorInicialFalse);
  const [mostrarEditar, setMostrarEditar] = useState(valorInicialFalse);
  const [anuncio, setAnuncio] = useState(valorInicialVacio);
  return (
    <div
      className="pagina-ofertas-creadas"
      onClick={(e) => {
        if (e.target.id === "boton-borrar-anuncio") {
          setMostrarConfirmacionBorrar(true);
          //Cojemos la id del padre que es la id del anuncio.
          setAnuncio(e.target.parentNode.id);
        }
        if (e.target.id === "boton-editar-anuncio") {
          setMostrarEditar(true);
          //Cojemos la id del padre que es la id del anuncio.
          setAnuncio(e.target.parentNode.id);
        }
      }}
    >
      <h1>Ofertas Creadas </h1>
      <AnunciosPanel />
      {/* Alerta de eliminación de producto. */}
      {estadoAlertaSuccess.estado && (
        <AlertaSucess
          mensaje={estadoAlertaSuccess.mensaje}
          funcionEstado={modificarEstadoSuccesAlert}
        />
      )}
      {mostrarConfirmacionBorrar && (
        <ModalConfirmacion
          setMostrar={setMostrarConfirmacionBorrar}
          funcion={borrarAnuncio}
          objetivo={anuncio}
          accion={"borrar"}
        />
      )}
      {mostrarEditar && (
        // Le mando el anuncio por parámetro.
        <ModalEditar setMostrar={setMostrarEditar} anuncio={anuncio} />
      )}
    </div>
  );
};

export default OfertasCreadas;
