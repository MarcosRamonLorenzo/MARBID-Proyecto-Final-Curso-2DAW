import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src="/src/assets/logoMarbidLetra.svg" lazy="loading" alt="" />
      <div>
        <h3>Freelancers</h3>

        <a href="#">Categorías</a>
        <a href="#">Inicio</a>
        <a href="#">Verificate</a>
      </div>
      <div>
        <h3>Terminos</h3>

        <a href="#">Política de privacidad</a>
        <a href="#">Términos y condiciones</a>
        <a href="#">Cargos y tarifas</a>
      </div>
      <div>
        <h3>Redes Sociales</h3>
        <div className="redes">
          <a href="#">logo</a>
          <a href="#">logo</a>
          <a href="#">logo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
