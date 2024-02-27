import React, { Fragment } from "react";
import "./Anuncio.scss";
import BotonMeGusta from "../BotonMeGusta.jsx";
import Card from "react-bootstrap/Card";

const Anuncio = ({ anuncio }) => {
  // Poner en base a la id_usuario, el nombre del usuario del anuncio.
  return (
    <Fragment>
      <Card id={anuncio.id}>
        <Card.Img
          variant="top"
          src={
            anuncio.imagen
              ? anuncio.imagen
              : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
          }
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
    </Fragment>
  );
};

export default Anuncio;
