import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Explora from "./pages/Explora.jsx";
import PanelDeControl from "./pages/PanelDeControl.jsx";

import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <>
      <div className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/IniciarSesion" element={<Login />} />
          <Route path="/Registro" element={<Register />} />
          <Route path="/Explora" element={<Explora />} />

          <Route path="/PanelDeControl" element={<PanelDeControl />}>
            <Route path="Favoritos" element={<Favoritos />} />
            <Route path="OfertasCreadas" element={<Explora />} />
            <Route path="OfertasAplicadas" element={<Explora />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
