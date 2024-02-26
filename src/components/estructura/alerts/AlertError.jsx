import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import "./AlertError.scss";

const AlertError = ({ mensajeError, estadoError }) => {
  useEffect(() => {
    // Creo un contador de 5 segundos para limpiar el estado.
    const contador = setTimeout(() => {
      estadoError("");
    }, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(contador);
  }, [mensajeError]);

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
