import React, { Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import FormCreacionOferta from "../estructura/estructura_oferta/FormCreacionOferta.jsx";
import "./ModalEditar.scss";

/* 
    Accion es la accion que se quiere realizar.  
    Funcion es la funcion que se quiere ejecutar.
    Objetivo es el id o la cosa a la que va dirigida la acción.
*/
const ModalEditar = ({ setMostrar, anuncio }) => {
  return (
    <Fragment>
      {/* Centro el modal, si mostrar es true se muestra y para esconderlo se usa esa función flecha. */}
      <Modal
        className="modal-editar"
        show={true}
        onHide={() => setMostrar(false)}
        centered
      >
        <Modal.Body>
          <FormCreacionOferta
            modoEditar={true}
            anuncioSeleccionadoEditar={anuncio}
          />
        </Modal.Body>
        <Modal.Footer>
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

export default ModalEditar;
