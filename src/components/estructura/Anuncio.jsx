import React from "react";
import "./Anuncio.scss";

const Anuncio = ({ anuncio }) => {
  // Poner en base a la id_usuario, el nombre del usuario del anuncio.
  return (
    <div className="anuncio">
      <h2>{anuncio.nombre ? anuncio.nombre : "No hay nombre disponible"}</h2>
      <img
        src={anuncio.imagen ? anuncio.imagen : "No hay una imagen disponible"}
      />
      <p>
        {anuncio.descripcion
          ? anuncio.descripcion
          : "No hay descripción disponible."}
      </p>
      <p>{anuncio.precio ? anuncio.precio : "No hay un precio disponible."}</p>
    </div>
  );
};

export default Anuncio;
