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
            <img
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/facebook-color-svgrepo-com.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvZmFjZWJvb2stY29sb3Itc3ZncmVwby1jb20uc3ZnIiwiaWF0IjoxNzA4Nzk5OTk4LCJleHAiOjE3NDAzMzU5OTh9.H64CYmtJqCFuSsqLvVRTHcVMW7SbGiJEo8wM_Zhvl9M&t=2024-02-24T18%3A39%3A58.379Z"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/github.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvZ2l0aHViLnN2ZyIsImlhdCI6MTcwODk4OTE2OCwiZXhwIjoxNzQwNTI1MTY4fQ.lf-s1WZj3-1HYRJm_RJ2WlcglaD0mY_y64gv9p8_g7o&t=2024-02-26T23%3A12%3A47.410Z"
              alt=""
            />
          </a>

          <a href="#">
            <img
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/lnkedin.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvbG5rZWRpbi5zdmciLCJpYXQiOjE3MDg5ODkyMzgsImV4cCI6MTc0MDUyNTIzOH0.3gcREdsxK0OqW9um3MwJ_7RAdgbu2arlWdjXb2-bQo4&t=2024-02-26T23%3A13%3A57.445Z"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
