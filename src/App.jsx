import React, { Fragment, useState } from "react";
import "./App.css";
import Login from "./paginas/Login.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default App;
