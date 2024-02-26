import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Explora from "./pages/Explora.jsx";
import PanelDeControl from "./pages/PanelDeControl.jsx";
import ContextoAnuncio from "./contexto/ContextoAnuncio.jsx";
import ContextoUsuarios from "./contexto/ContextoUsuarios.jsx";
import CreacionProducto from "./pages/CreacionProducto.jsx";
import OfertasCreadas from "./pages/OfertasCreadas.jsx";
import OfertasAplicadas from "./components/estructura/estructura_panel_control/OfertasAplicadas.jsx";
import OfertasFavoritas from "./pages/OfertasFavoritas.jsx";
import AnuncioIndividual from "./pages/AnuncioIndividual.jsx";

function App() {
  return (
    <>
      <ContextoUsuarios>
        <ContextoAnuncio>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IniciarSesion" element={<Login />} />
            <Route path="/Registro" element={<Register />} />
            <Route path="/Explora" element={<Explora />} />
            <Route path="/Anuncio" element={<AnuncioIndividual />} />

            <Route path="/PanelDeControl" element={<PanelDeControl />}>
              <Route path="CreacionProducto" element={<CreacionProducto />} />
              <Route path="Favoritos" element={<OfertasFavoritas />} />
              <Route path="OfertasCreadas" element={<OfertasCreadas />} />
              <Route path="OfertasAplicadas" element={<OfertasAplicadas />} />
            </Route>
          </Routes>
        </ContextoAnuncio>
      </ContextoUsuarios>
    </>
  );
}

export default App;
