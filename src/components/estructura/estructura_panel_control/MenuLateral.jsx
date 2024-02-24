import React from "react";
import { Link } from "react-router-dom";
import "./MenuLateral.scss";
const MenuLateral = () => {
  return (
    <div className="menu-lateral">
      <div className="menu-lateral-enlaces">
        <Link to={"/"}>
          <img
            src="src\assets\logoMarbidLetra.svg"
            className="menu-lateral-logo"
            alt=""
          />
        </Link>

        <div className="ofertas-creadas contenedor-enlace">
          <img
            className="icono-lista"
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/ofertas-creadas.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvb2ZlcnRhcy1jcmVhZGFzLnN2ZyIsImlhdCI6MTcwODc3NDc0MywiZXhwIjoxNzQwMzEwNzQzfQ.F07bzbysDmwLnU74Nj_wfUAtZ3vLBq4xyhQ7pwndzJI&t=2024-02-24T11%3A39%3A03.829Z"
            alt=""
          />
          <Link to={"./OfertasCreadas"}>Ofertas Creadas</Link>
        </div>
        <div className="ofertas-aplicadas contenedor-enlace">
          <img
            className="icono-lista"
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/ofertas-aplicadas.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvb2ZlcnRhcy1hcGxpY2FkYXMuc3ZnIiwiaWF0IjoxNzA4Nzc0ODA3LCJleHAiOjE3NDAzMTA4MDd9.AtfFj7PNLgCyKJChuIzbj940zsJOoVSMgPeRBi1XxWs&t=2024-02-24T11%3A40%3A07.845Z"
            alt=""
          />
          <Link to={"./OfertasAplicadas"}>Ofertas Aplicadas</Link>
        </div>
        <div className="ofertas-gustadas contenedor-enlace">
          <img
            className="icono-lista"
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/corazon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvY29yYXpvbi5zdmciLCJpYXQiOjE3MDg3NzQ3NjgsImV4cCI6MTc0MDMxMDc2OH0.HMA2uLI8O3KafDgszcLN-wRGIucz_w-TEQD2Xe7Mo8Q&t=2024-02-24T11%3A39%3A28.206Z"
            alt=""
          />
          <Link to={"./Favoritos"}>Ofertas Gustadas</Link>
        </div>
        <div className="crear-oferta contenedor-enlace">
          <img
            className="icono-lista"
            src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/agregarOferta.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvYWdyZWdhck9mZXJ0YS5zdmciLCJpYXQiOjE3MDg3NzQ5NjcsImV4cCI6MTc0MDMxMDk2N30.AjKdDurg7sW8i1AcAnKIWdXlFtyIt4XdHVMcU2lUtI8&t=2024-02-24T11%3A42%3A47.576Z"
            alt=""
          />
          <Link to={"./CreacionProducto"}>Crear Oferta</Link>
        </div>
      </div>

      <div className="perfil contenedor-enlace">
        <img
          className="icono-lista"
          src="https://hpagogvjlwigezymiejy.supabase.co/storage/v1/object/sign/IconosSVG/perfil.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJY29ub3NTVkcvcGVyZmlsLnN2ZyIsImlhdCI6MTcwODc3NTQ3NywiZXhwIjoxNzQwMzExNDc3fQ.3z2qcCLHIlQcQUeB36RQvTbnwwgO4P-IWy3Nu-s5fCA&t=2024-02-24T11%3A51%3A17.921Z"
          alt=""
        />
        <Link to={"./"}>Perfil</Link>
      </div>
    </div>
  );
};

export default MenuLateral;
