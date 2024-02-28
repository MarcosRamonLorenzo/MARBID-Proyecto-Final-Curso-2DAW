import React from "react";
import Cabecera from "../components/estructura/Cabecera.jsx";
import HeroSection from "../components/estructura/estructura_home/HeroSection.jsx";
import Buscador from "../components/estructura/estructura_home/Buscador.jsx";
import Insignias from "../components/estructura/estructura_home/Insignias.jsx";
import Categorias from "../components/estructura/estructura_home/Categorias.jsx";
import GridTarjetasDibujos from "../components/estructura/estructura_home/GridTarjetasDibujos.jsx";
import Footer from "../components/estructura/Footer.jsx";
import useDatosUsuarios from "../hooks/useDatosUsuarios.js";
import AlertaSuccess from "../components/alerts/AlertaSuccess.jsx";
import Loading from "../components/estructura/Loading.jsx";

const Home = () => {
  const { estadoSuccessAlert, modificarEstadoSuccesAlert, cargandoUsuario } =
    useDatosUsuarios();

  return (
    <div className="home">
      {cargandoUsuario && <Loading />}
      <Cabecera />
      <HeroSection />
      <Buscador />
      <Insignias />
      <Categorias />
      <GridTarjetasDibujos />
      <Footer />
      {estadoSuccessAlert.estado && (
        <AlertaSuccess
          mensaje={estadoSuccessAlert.mensaje}
          funcionEstado={modificarEstadoSuccesAlert}
        />
      )}
    </div>
  );
};

export default Home;
