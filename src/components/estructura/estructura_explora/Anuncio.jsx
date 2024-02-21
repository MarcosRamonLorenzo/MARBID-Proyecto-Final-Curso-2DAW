import React from "react";
import "./Anuncio.scss";
import BotonMeGusta from "../BotonMeGusta";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Anuncio = ({ anuncio }) => {
  // Poner en base a la id_usuario, el nombre del usuario del anuncio.
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={anuncio.imagen ? anuncio.imagen : "No hay una imagen disponible"}
        />
        <Card.Body>
          <Card.Text className="card-usuario">Usuario</Card.Text>
          <Card.Title className="card-nombre">
            {" "}
            {anuncio.nombre ? anuncio.nombre : "No hay nombre disponible"}
          </Card.Title>
          <Card.Text className="card-descripcion">
            {anuncio.descripcion
              ? anuncio.descripcion
              : "No hay descripción disponible."}
          </Card.Text>

          <div className="anuncio-precio-likes">
            {anuncio.precio ? (
              <h3>{anuncio.precio}€</h3>
            ) : (
              <p>No hay un precio disponible.</p>
            )}
            <BotonMeGusta />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Anuncio;
