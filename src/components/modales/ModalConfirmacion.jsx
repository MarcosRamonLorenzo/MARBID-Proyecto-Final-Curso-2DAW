import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
// No uso scss porque recoge el del jsx donde se muestre.

/* 
    Accion es la accion que se quiere realizar.  
    Funcion es la funcion que se quiere ejecutar.
    Objetivo es el id o la cosa a la que va dirigida la acción.
*/
const ModalConfirmacion = ({ setMostrar, accion, funcion, objetivo }) => {
  return (
    <Fragment>
      {/* Centro el modal, si mostrar es true se muestra y para esconderlo se usa esa función flecha. */}
      <Modal show={true} onHide={() => setMostrar(false)} centered>
        <Modal.Header>
          <Modal.Title>
            Estás a punto de {accion ? accion : "realizar una acción"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Deseas continuar?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              funcion(objetivo);
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

export default ModalConfirmacion;
