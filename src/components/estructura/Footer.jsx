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
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/github-svgrepo-com.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvZ2l0aHViLXN2Z3JlcG8tY29tLnN2ZyIsImlhdCI6MTcwODgwMDAxMiwiZXhwIjoxNzQwMzM2MDEyfQ.L5ZgvUYNkiUyCux-lOmK5nwCs02Dc88VsGS4ZdD2I1w&t=2024-02-24T18%3A40%3A11.816Z"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/instagram-1-svgrepo-com.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvaW5zdGFncmFtLTEtc3ZncmVwby1jb20uc3ZnIiwiaWF0IjoxNzA4ODAwMDI5LCJleHAiOjE3NDAzMzYwMjl9.9KIh0aLpKJ4EAJazvnUE_gqYIe_T4fKyJ99YPghEWPo&t=2024-02-24T18%3A40%3A29.422Z"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/linkedin-svgrepo-com.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvbGlua2VkaW4tc3ZncmVwby1jb20uc3ZnIiwiaWF0IjoxNzA4ODAwMDUwLCJleHAiOjE3NDAzMzYwNTB9.DMGKFPKqeeRlCS802nnf9x7CAT1DV7o0_hCecqpu_4w&t=2024-02-24T18%3A40%3A49.598Z"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
