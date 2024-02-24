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

            <Route path="/PanelDeControl" element={<PanelDeControl />}>
              <Route path="CreacionProducto" element={<CreacionProducto />} />
              <Route path="Favoritos" element={<Explora />} />
              <Route path="OfertasCreadas" element={<Explora />} />
              <Route path="OfertasAplicadas" element={<Explora />} />
            </Route>
          </Routes>
        </ContextoAnuncio>
      </ContextoUsuarios>
    </>
  );
}

export default App;
