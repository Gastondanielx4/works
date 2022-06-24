import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos </h2>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <h3>Home</h3>
            <p>Bienvenidos al tema de las Rutas en React</p>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default ConceptosBasicos;
