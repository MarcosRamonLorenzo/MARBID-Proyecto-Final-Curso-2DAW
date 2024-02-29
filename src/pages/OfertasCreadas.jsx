import React, { useState } from "react";
import AnunciosPanel from "../components/estructura/estructura_panel_control/AnunciosPanel";
import "./OfertasCreadas.scss";
import useDatosAnuncios from "../hooks/useDatosAnuncio.js";
import AlertaSucess from "../components/alerts/AlertaSuccess.jsx";
import ModalConfirmacion from "../components/modales/ModalConfirmacion.jsx";
import ModalEditar from "../components/modales/ModalEditar.jsx";

const OfertasCreadas = () => {
  const {
    estadoAlertaSuccess,
    modificarEstadoSuccesAlert,
    borrarAnuncio,
    seleccionarAnuncio,
    anuncioSeleccionado,
  } = useDatosAnuncios();

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
      onClick={async (e) => {
        // Si selecciona la imagen del anuncio lo lleva a la oferta.
        if (e.target.tagName === "IMG") {
          seleccionarAnuncio(e.target.parentNode.id, true);
        }
        // Si selecciona el boton de borrar le salta el modal de borrar.
        if (e.target.id === "boton-borrar-anuncio") {
          //Cojemos la id del padre que es la id del anuncio.
          setAnuncio(e.target.parentNode.id);
          setMostrarConfirmacionBorrar(true);
        }
        // Si selecciona el boton de editar le salta el modal de editar.
        if (e.target.id === "boton-editar-anuncio") {
          //Cojemos la id del padre que es la id del anuncio, la convertimos en un anuncio.
          seleccionarAnuncio(e.target.parentNode.id);
          setMostrarEditar(true);
        }
        // Cuando se hace la función de editar se cierra el modal.
        if (e.target.id === "boton-editar") {
          setMostrarEditar(false);
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
        // Le mando el anuncio por parámetro. Como "anuncio" es la id tengo que recoger el json entero.
        <ModalEditar
          setMostrar={setMostrarEditar}
          anuncio={anuncioSeleccionado}
        />
      )}
    </div>
  );
};

export default OfertasCreadas;
