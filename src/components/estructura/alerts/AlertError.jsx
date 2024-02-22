import React from "react";
import { Alert } from "react-bootstrap";
import "./AlertError.scss";

const AlertError = ({ mensajeError, estadoError }) => {
  return (
    <div className="alerta-error">
      <Alert
        variant="danger"
        onClose={() => {
          // Limpio el estado del error para que se pueda repetir varias veces. Esto provoca que desaparezca el estado.
          estadoError("");
        }}
        dismissible
      >
        <Alert.Heading>Error</Alert.Heading>
        <p>
          {mensajeError ? mensajeError : "Un error Inesperado ha ocurrido."}
        </p>
      </Alert>
    </div>
  );
};

export default AlertError;
