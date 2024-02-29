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
          <a href="#">
            <img src="src\assets\footer-discord.svg" alt="" />
          </a>
          <a href="#" target="_blank">
            <img src="src\assets\footer-facebook.svg" alt="" />
          </a>

          <a href="#">
            <img src="src\assets\footer-insta.svg" alt="" />
          </a>
          <a href="#">
            <img src="src\assets\footer-x.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
