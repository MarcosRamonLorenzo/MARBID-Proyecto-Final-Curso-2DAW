import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import HeroSection from "../components/estructura/estructura_home/HeroSection.jsx";
import Buscador from "../components/estructura/estructura_home/Buscador.jsx";
import Insignias from "../components/estructura/estructura_home/Insignias.jsx";
import Categorias from "../components/estructura/estructura_home/Categorias.jsx";
import GridTarjetasDibujos from "../components/estructura/estructura_home/GridTarjetasDibujos.jsx";
import Footer from "../components/estructura/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Cabecera />
      <HeroSection />
      <Buscador />
      <Insignias />
      <Categorias />
      <GridTarjetasDibujos />
      <Footer />
    </div>
  );
};

export default Home;
