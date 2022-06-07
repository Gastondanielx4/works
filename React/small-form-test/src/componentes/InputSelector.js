import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { TextField } from "@mui/material";

const arrayRol = [
  "Erudito",
  "Aprendiz",
  "Fenomeno",
  "Developper-Senior",
  "Devolepper-Junior",
];
const BoxYellow = styled.div`
  width: 70%;
  height: 25vh;
  background: linear-gradient(0deg, #f2e013, #1bb500ff);
  color: #150e72;
  margin: auto;
  margin-top: 3rem;
  font-weight: bold;
  font-size: 4rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const BoxApp = styled.div`
  padding: 3rem;
  width: 60%;
  height: 40vh;
  border-radius: 10px;
  background: linear-gradient(180deg, #25575a, #252958ff);
  color: #1d4345;
  margin: auto;
  margin-top: 3rem;
  font-weight: bold;
  font-size: 4rem;
`;

const initialSelected = {
  name: "",
  rol: "",
};

export default function InputSelector() {
  const [selected, setSelected] = React.useState(initialSelected);
  const [leyenda, setLeyenda] = React.useState("");
  const [errorName, setErrorName] = React.useState("");

  const handleChangeName = (e) => {
    setSelected({
      ...selected,
      name: e.target.value,
    });
    if (selected.name.length > 25) {
      setErrorName(true);
      setLeyenda("Demasiados caracteres");
      setTimeout(() => {
        setSelected({
          ...selected,
          name: "",
        });
        setErrorName(false);
        setLeyenda("");
      }, 3000);
    } else {
      setErrorName(false);
      setLeyenda("");
    }
  };

  const handleChangeRol = (e) => {
    setSelected({
      ...selected,
      rol: e.target.value,
    });
  };

  return (
    <div>
      <BoxApp>
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <TextField
            maxlength="16"
            style={{ backgroundColor: "#51e3ebd5", borderRadius: "10px" }}
            placeholder="Name"
            onChange={handleChangeName}
            value={selected.name}
            error={errorName}
            helperText={leyenda}
          ></TextField>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
          <Select
            name="R"
            value={selected.rol}
            onChange={handleChangeRol}
            displayEmpty
            inputProps={{ "aria-label": "Rol" }}
            style={{ backgroundColor: "#51e3ebd5" }}
          >
            {arrayRol.map((el) => (
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <BoxYellow>
          <p>{selected.name}</p>
          <p>{selected.rol}</p>
        </BoxYellow>
      </BoxApp>
    </div>
  );
}
