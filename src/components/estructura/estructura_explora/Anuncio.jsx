import React, { Fragment, useState } from "react";
import "./Anuncio.scss";
import BotonMeGusta from "../BotonMeGusta.jsx";
import { Card, Button } from "react-bootstrap";
import useDatosAnuncios from "../../../hooks/useDatosAnuncio.js";
import ModalConfirmacion from "../../modales/ModalConfirmacion.jsx";

const Anuncio = ({ anuncio, modoEditar = false }) => {
  const { borrarAnuncio } = useDatosAnuncios();
  // Valores iniciales.
  const valorInicialFalse = false;
  const [mostrarConfirmacion, setMostrarConfirmacion] =
    useState(valorInicialFalse);
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
            {modoEditar ? (
              <>
                <div className="botones-funciones">
                  <Button
                    variant="danger"
                    onClick={() => {
                      setMostrarConfirmacion(true);
                    }}
                  >
                    Borrar
                  </Button>
                  <Button variant="primary" onClick={() => {}}>
                    Editar
                  </Button>
                </div>
              </>
            ) : (
              <BotonMeGusta />
            )}
          </div>
        </Card.Body>
      </Card>
      {mostrarConfirmacion && (
        <ModalConfirmacion
          setMostrar={setMostrarConfirmacion}
          funcion={borrarAnuncio}
          objetivo={anuncio.id}
          accion={"borrar"}
        />
      )}
    </Fragment>
  );
};

export default Anuncio;
