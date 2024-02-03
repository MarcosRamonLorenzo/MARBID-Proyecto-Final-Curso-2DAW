import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import HeroSection from "../components/estructura/HeroSection";
import Buscador from "../components/estructura/Buscador";
import Insignias from "../components/estructura/Insignias";
import Categorias from "../components/estructura/Categorias";
import GridTarjetasDibujos from "../components/estructura/GridTarjetasDibujos";
import Footer from "../components/estructura/Footer";

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
