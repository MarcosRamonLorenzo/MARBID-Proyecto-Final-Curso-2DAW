import React, { Fragment } from "react";
import "./OfertasCreadas.scss";
import { Link } from "react-router-dom";

const OfertasCreadas = () => {
  return (
    <Fragment>
      <div className="organizadorOfertas">
        <div></div>
        <Link to={"/CreacionProducto"}>
          <button className="crearOferta">Crear Oferta</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default OfertasCreadas;
