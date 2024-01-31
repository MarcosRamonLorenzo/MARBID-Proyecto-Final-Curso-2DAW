import React from "react";
import { Route, Routes } from "react-router-dom";
import InicioSesion from "../../paginas/Login.jsx";

const Rutas = () => {
  return (
    <>
      <div className="rutas">
        {/* Creamos las rutas con las páginas. */}
        <Routes>
          <Route path="/iniciarSesion" element={<InicioSesion />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Rutas;
