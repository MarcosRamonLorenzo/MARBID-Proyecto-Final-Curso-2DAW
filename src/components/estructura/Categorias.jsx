import React from "react";
import "./Categorias.scss";
const Categorias = () => {
  return (
    /* Tarjetas de cateogrias en el home. */
    <div className="categorias-home">
      <h2>Categorias</h2>
      <h5>Explora las direrentes cateogrias que ofrecemos</h5>
      <div className="contenedor-categorias-home">
        <div className="categoria-home c-1">
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/w_800/f_auto,q_auto/v1/attachments/generic_asset/asset/680ffd19753310e217b79cf02b6b6c1f-1653308162343/before%20buying%20nft%20art.jpg"
            alt=""
          />
          <p>Artes gráficas</p>
        </div>
        <div className="categoria-home c-2">
          <img
            src="https://medac.es/sites/default/files/blog/destacadas/%C2%BFQu%C3%A9%20Es%20El%20Marketing%20Digital.jpg"
            alt=""
          />
          <p>Marketing digital</p>
        </div>
        <div className="categoria-home c-3">
          <img
            src="https://www.leonhunter.com/wp-content/uploads/2023/06/Escribir-para-vivir.jpg"
            alt=""
          />
          <p> Escritura y traducción</p>
        </div>
        <div className="categoria-home c-4">
          <img
            src="https://assets-global.website-files.com/64d129e8b2ca32f3a33b0066/64f0bb76e56702b45df78665_sala%20de%20edicion%20vacia%20edicion%20online.jpg"
            alt=""
          />
          <p> Video y animación </p>
        </div>
        <div className="categoria-home c-5">
          <img
            src="https://img.myloview.com.br/posters/microfone-condensador-em-gravacao-digital-fundo-de-estudio-de-transmissao-400-105310982.jpg"
            alt=""
          />
          <p> Música y audio</p>
        </div>
        <div className="categoria-home c-6">
          <img
            src="https://sanblasdigital.es/wp-content/uploads/laptop-gb09eb3827_1280.jpg"
            alt=""
          />
          <p>Programación y tecnología</p>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
