import React from "react";
import "./Anuncio.scss";
import BotonMeGusta from "./BotonMeGusta";

const Anuncio = ({ anuncio }) => {
  // Poner en base a la id_usuario, el nombre del usuario del anuncio.
  return (
    <div className="anuncio">
      <img
        className="anuncio-img"
        src={anuncio.imagen ? anuncio.imagen : "No hay una imagen disponible"}
      />
      <p className="anuncio-usuario">Usuario</p>
      <h3 className="anuncio-nombre">
        {anuncio.nombre ? anuncio.nombre : "No hay nombre disponible"}
      </h3>
      <p className="anuncio-descripcion">
        {anuncio.descripcion
          ? anuncio.descripcion
          : "No hay descripción disponible."}
      </p>
      <div className="anuncio-precio-likes">
        {anuncio.precio ? (
          <h3> {anuncio.precio}€</h3>
        ) : (
          "No hay un precio disponible."
        )}
        <BotonMeGusta />
      </div>
    </div>
  );
};

export default Anuncio;
