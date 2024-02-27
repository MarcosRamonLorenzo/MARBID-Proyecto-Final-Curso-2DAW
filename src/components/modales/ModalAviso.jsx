import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
// No uso scss porque recoge el del jsx donde se muestre.

const ModalAviso = ({ setMostrar, mensajeAviso, insertar }) => {
  return (
    <Fragment>
      {/* Centro el modal, si mostrar es true se muestra y para esconderlo se usa esa función flecha. */}
      <Modal show={true} onHide={() => setMostrar(false)} centered>
        <Modal.Header>
          <Modal.Title>Error en la operación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {mensajeAviso
              ? `${mensajeAviso} faltan por rellenar. ¿Deseas continuar?`
              : "Algo hubo mal en la operación."}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              insertar();
              setMostrar(false);
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setMostrar(false);
            }}
          >
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalAviso;
