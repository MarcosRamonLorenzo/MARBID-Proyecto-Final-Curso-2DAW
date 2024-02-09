import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./GridTarjetasDibujos.scss";

const GridTarjetasDibujos = () => {
  return (
    <div className="grid-tarjetas-dibujos">
      <h2>Servicios Populares</h2>
      <Container fluid="md">
        <Row>
          <Col xl={6} lg={6} className="diseño-grafico-card">
            <img
              loading="lazy"
              src="https://imgs.search.brave.com/SZfIvtMzFEZC_T9DHcc1oAmd5aHoHWtjaFnxpbmgvAo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBkL0dy/ZWF0X1dhdmVfb2Zm/X0thbmFnYXdhMi5q/cGcvNTEycHgtR3Jl/YXRfV2F2ZV9vZmZf/S2FuYWdhd2EyLmpw/Zw"
              alt=""
            />
          </Col>
          <Col md={6} lg={3} className="wordpress-card">
            <img
              loading="lazy"
              src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/03/que-es-wordpress.png"
              alt=""
            />
          </Col>
          <Col md={6} lg={3} className="money-card">
            <img
              loading="lazy"
              src="https://elasesorfinanciero.com/wp-content/uploads/2021/04/sostenible-ESG-medio-ambiente.jpg"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={3} className="arte-card">
            <img
              loading="lazy"
              src="https://static01.nyt.com/images/2023/05/30/well/30WELL-ART-BRAIN-esp/30WELL-ART-BRAIN-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
              alt=""
            />
          </Col>
          <Col md={6} lg={3} className="cine-card">
            <img
              loading="lazy"
              src="https://umb.edu.co/wp-content/uploads/2023/09/cine-y-tv.webp"
              alt=""
            />
          </Col>
          <Col md={12} lg={6} className="videojuegos-card">
            <img
              loading="lazy"
              src="https://www.egibide.org/file/2023/04/ee1207d6-3037-4199-af15-0cd36327f47f.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GridTarjetasDibujos;
