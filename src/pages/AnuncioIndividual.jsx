import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import "./AnuncioIndividual.scss";
import useDatosAnuncios from "../hooks/useDatosAnuncio";

const AnuncioIndividual = () => {
  const { anuncioSeleccionado, navegar } = useDatosAnuncios();

  return (
    <div>
      <div className="anuncio-individual">
        <Cabecera />
        <div className="contenedor-anuncio-individual">
          {anuncioSeleccionado ? (
            <>
              <div className="datos-anuncio-individual">
                <p>Usuario</p>
                <h2>{anuncioSeleccionado.nombre}</h2>
                <img src={anuncioSeleccionado.imagen} alt="" />
                <div className="fecha-anuncio">
                  <h5>Fecha de Creación.</h5>
                  {anuncioSeleccionado.fecha_creacion}
                </div>

                <div className="descripcion-anuncio">
                  <h5>Descipción del Anuncio.</h5>
                  <p>{anuncioSeleccionado.descripcion}</p>
                </div>
              </div>
              <div className="precio-anuncio-individual">
                <h3>{anuncioSeleccionado.precio}€</h3>
                <p>Categoria</p>
                <p>Entrega en 2 días</p>
                <ul className="lista-garantias">
                  <li>Satisfacción Garantizada</li>
                  <li>Calidad Profesional</li>
                  <li>Entrega Puntual</li>
                  <li>Comunicación Transparente</li>
                  <li>Confidencialidad y Privacidad</li>
                  <li>Soporte Post-Entrega</li>
                  <li>Garantía de Devolución de Dinero</li>
                  <li>Experiencia Comprobada</li>
                </ul>
                <button>Aplicar Oferta</button>
              </div>
            </>
          ) : (
            navegar("/Explora")
          )}
        </div>
      </div>
    </div>
  );
};

export default AnuncioIndividual;
