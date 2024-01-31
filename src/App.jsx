import "./App.scss";
import { Button } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InicioSesion from "./pages/Login.jsx";

function App() {
  return (
    <>
      <div className="contenedor-principal">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/iniciarSesion" element={<InicioSesion />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
