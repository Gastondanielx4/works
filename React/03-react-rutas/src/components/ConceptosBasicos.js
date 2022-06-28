import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
  Link,
} from "react-router-dom";
import MenuConceptos from "./MenuConceptos";
import Acerca from "../pages/Acerca";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <MenuConceptos />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
      <h2>Conceptos Básicos </h2>
      <BrowserRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/about"
            element={
              <>
                {""}
                <Navigate to="/acerca" />{" "}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                {""}
                <Navigate to="/contacto" />{" "}
              </>
            }
          />
          <Route path="/react/*" element={<ReactTopics />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
/* const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos </h2>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h3>Home</h3>
                <p>Bienvenidos al tema de las Rutas en React</p>
              </div>
            }
          />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}; */
export default ConceptosBasicos;
