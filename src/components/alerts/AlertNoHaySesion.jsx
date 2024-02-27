import { Alert } from "react-bootstrap";
import React from "react";

function AlertNoHaySesion() {
  return (
    <Alert variant="success" className="mx-5">
      <Alert.Heading>¿A dónde vas vaquero?</Alert.Heading>
      <p>
        As entrado a una página que no deberías. Vueve al menú principal e
        inicia sesión para acceder a la página.
      </p>
    </Alert>
  );
}

export default AlertNoHaySesion;
