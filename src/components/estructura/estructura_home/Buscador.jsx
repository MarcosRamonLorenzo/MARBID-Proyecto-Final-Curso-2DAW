import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Buscador.scss";

const Buscador = () => {
  return (
    <div className="buscador">
      <h2>Busca tu servicio favorito aquí</h2>
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2 input-buscar-servicio"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="boton-buscar-servicio">
              Buscar Servicio
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Buscador;
