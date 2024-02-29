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
                <h2>
                  {anuncioSeleccionado.nombre
                    ? anuncioSeleccionado.nombre
                    : "No hay nombre"}
                </h2>
                <img
                  src={
                    anuncioSeleccionado.imagen
                      ? anuncioSeleccionado.imagen
                      : "No hay imagen."
                  }
                  alt=""
                />
                <div className="fecha-anuncio">
                  <h5>Fecha de Creación.</h5>
                  {anuncioSeleccionado.fecha_creacion}
                </div>

                <div className="descripcion-anuncio">
                  <h5>Descipción del Anuncio.</h5>
                  <p>
                    {anuncioSeleccionado.descripcion
                      ? anuncioSeleccionado.descripcion
                      : "No hay descripción."}
                  </p>
                </div>
              </div>
              <div className="precio-anuncio-individual">
                <h3>
                  {anuncioSeleccionado.precio
                    ? anuncioSeleccionado.precio
                    : "No hay precio"}
                  €
                </h3>
                <p>
                  {anuncioSeleccionado.categoria
                    ? anuncioSeleccionado.categoria
                    : "No hay categoría"}
                </p>
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
