import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
// No uso scss porque recoge el del jsx donde se muestre.

const ModalErrores = ({ mostrar, setMostrar, mensajeError }) => {
  return (
    <Fragment>
      {/* Centro el modal, si mostrar es true se muestra y para esconderlo se usa esa función flecha. */}
      <Modal show={mostrar} onHide={() => setMostrar(false)} centered>
        <Modal.Header>
          <Modal.Title>Error en la operación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {mensajeError ? mensajeError : "Algo hubo mal en la operación."}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setMostrar(false)}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalErrores;
