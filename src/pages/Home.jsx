import React from "react";
import Cabecera from "../components/estructura/Cabecera";
import HeroSection from "../components/estructura/HeroSection";
import Buscador from "../components/estructura/Buscador";
import Insignias from "../components/estructura/Insignias";

const Home = () => {
  return (
    <div>
      <Cabecera />
      <HeroSection />
      <Buscador />
      <Insignias />
    </div>
  );
};

export default Home;
