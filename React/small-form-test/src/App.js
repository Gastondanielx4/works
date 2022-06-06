import { Link, Route, Routes } from "react-router-dom";
import InputSelect from "./componentes/InputSelector";
import Selects from "./componentes/Selector";
import { Button } from "@mui/material";
import "./App.css";
import styled from "@emotion/styled";

function App() {
  const rutaEjercicioCorrecto = "/goodExercise",
    rutaEjercicioIncorrecto = "/badExercise",
    ButtonStyled = styled(Button)`
      color: whitesmoke;
      background-color: #1d4345;
    `;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Small Form Test</h1>
      </header>
      <div className="navegador">
        <ButtonStyled
          variant="contained"
          component={Link}
          to={rutaEjercicioCorrecto}
        >
          {rutaEjercicioCorrecto}
        </ButtonStyled>
        <ButtonStyled
          variant="contained"
          component={Link}
          to={rutaEjercicioIncorrecto}
        >
          {rutaEjercicioIncorrecto}
        </ButtonStyled>
      </div>

      <Routes>
        <Route path={rutaEjercicioIncorrecto} element={<Selects />} />
        <Route path={rutaEjercicioCorrecto} element={<InputSelect />} />
      </Routes>
    </div>
  );
}

export default App;
