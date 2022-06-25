import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
        exercitationem saepe non minima aliquid! Fugit ex iusto nulla molestias
        dolores voluptates officiis consequuntur, dicta natus, eum ratione nobis
        eius autem?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/estado">Estado</Link>
        </li>
        <li>
          <Link to="/componentes">Componentes</Link>
        </li>
        <Routes>
          <Route path=":topic" element={<Topic />} />
        </Routes>
      </ul>
    </div>
  );
};

export default ReactTopics;
