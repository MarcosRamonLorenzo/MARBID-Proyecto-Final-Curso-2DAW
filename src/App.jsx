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
        <div className="contenedor-principal">
          <ContextoAnuncio>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/IniciarSesion" element={<Login />} />
              <Route path="/Registro" element={<Register />} />
              <Route path="/Explora" element={<Explora />} />
              <Route path="/CreacionProducto" element={<CreacionProducto />} />

              <Route path="/PanelDeControl" element={<PanelDeControl />} />
            </Routes>
          </ContextoAnuncio>
        </div>
      </ContextoUsuarios>
    </>
  );
}

export default App;
