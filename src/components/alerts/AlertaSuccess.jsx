import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import "./AlertaSuccess.scss";

const AlertaSuccess = ({ mensaje, funcionEstado }) => {
  return (
    <div className="alerta-success">
      <Alert
        variant="success"
        onClose={() => {
          // Limpio el estado del error para que se pueda repetir varias veces. Esto provoca que desaparezca el estado.
          funcionEstado(false);
        }}
        dismissible
      >
        <Alert.Heading>Exito</Alert.Heading>
        <p>{mensaje && mensaje}</p>
      </Alert>
    </div>
  );
};

export default AlertaSuccess;
