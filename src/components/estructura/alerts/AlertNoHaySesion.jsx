import { Alert } from "react-bootstrap";

function AlertNoHaySesion() {
  return (
    <Alert variant="success">
      <Alert.Heading>¿A dónde vas vaquero?</Alert.Heading>
      <p>
        As entrado a una página que no deberías. Vueve al menú principal e
        inicia sesión para acceder a la página.
      </p>
    </Alert>
  );
}

export default AlertNoHaySesion;
