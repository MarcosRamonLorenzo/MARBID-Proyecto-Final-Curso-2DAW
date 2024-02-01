import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
// No uso scss porque recoge el del jsx donde se muestre.

const ModalNecesitarDatos = ({ mostrar, setMostrar }) => {
  return (
    <Fragment>
      {/* Centro el modal, si mostrar es true se muestra y para esconderlo se usa esa función flecha. */}
      <Modal show={mostrar} onHide={() => setMostrar(false)} centered>
        <Modal.Header>
          <Modal.Title>Faltan datos por ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Por favor, ingresa la contraseña y el usuario.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrar(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalNecesitarDatos;
