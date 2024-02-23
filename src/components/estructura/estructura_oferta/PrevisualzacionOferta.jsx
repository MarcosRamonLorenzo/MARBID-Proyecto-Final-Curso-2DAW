import React from "react";
import Card from "react-bootstrap/Card";
import "./PrevisualzacionOferta.scss";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";
const PrevisualzacionOferta = () => {
  const { formularioCreacionOferta: anuncio } = useDatosAnuncios();

  return (
    <div className="previsulazacion-oferta">
      <p>Previsualización Oferta</p>
      <Card>
        <Card.Img
          variant="top"
          loading="lazy"
          src={
            anuncio.imagen
              ? anuncio.imagen
              : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
          }
        />
        <Card.Body>
          <Card.Text
            className={`card-usuario ${!anuncio.nombre && "texto-rojo"}`}
          >
            Usuario
          </Card.Text>
          <Card.Title
            className={`card-nombre ${!anuncio.nombre && "texto-rojo"}`}
          >
            {anuncio.nombre ? anuncio.nombre : "No hay nombre disponible"}
          </Card.Title>
          <Card.Text
            className={`card-descripcion ${
              !anuncio.descripcion && "texto-rojo"
            }`}
          >
            {anuncio.descripcion
              ? anuncio.descripcion
              : "No hay descripción disponible."}
          </Card.Text>

          <div className="anuncio-precio">
            {anuncio.precio ? (
              <h3>{anuncio.precio}€</h3>
            ) : (
              <p className="texto-rojo">No hay un precio disponible.</p>
            )}
          </div>
          <div className="anuncio-cateogria">
            {anuncio.categoria ? (
              <p>Cateogria: {anuncio.categoria}</p>
            ) : (
              <p className="texto-rojo">Sin cateogria.</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PrevisualzacionOferta;
