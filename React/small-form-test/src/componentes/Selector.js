import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";

const dataBase = [
  { id: 1, name: "---------------", rol: "----------------" },
  { id: 2, name: "Matias Heredia", rol: "Erudito" },
  { id: 3, name: "Benjamin Quattrocchi", rol: "Aprendiz" },
  { id: 4, name: "Agustina Heredia", rol: "Fenomeno" },
];

const BoxYellow = styled.div`
  width: 40%;
  height: 30vh;
  background: linear-gradient(90deg, #f2e013, #f2df1349);
  background: linear-gradient(180deg, #f2e013, #f2df1345);
  color: #1d4345;
  margin: auto;
  margin-top: 3rem;
  font-weight: bold;
  font-size: 4rem;
`;

const initialSelected = {
  id: null,
  name: "",
  rol: "",
};

export default function Selects() {
  const [name, setName] = React.useState(initialSelected.name);
  const [rol, setRol] = React.useState(initialSelected.rol);
  const [selected, setSelected] = React.useState(initialSelected);

  const handleChange = (e) => {
    setName(e.target.value);
    setRol(e.target.value);
    /* console.log(e.target); */
    setSelected({
      ...selected,
      name: e.target.value,
    });
    console.log(e.target);
    console.log(selected);
    console.log(initialSelected);
    console.log(e.target.textContent);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={name}
          name="Name"
          label="Name"
          onChange={handleChange}
        >
          {dataBase.map((el) => (
            <MenuItem
              key={el.id}
              value={el.id}
              onClick={(e) => console.log(e.target)}
            >
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
        <Select
          name="R"
          value={rol}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Rol" }}
        >
          {dataBase.map((el) => (
            <MenuItem key={el.id} value={el.id}>
              {el.rol}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <BoxYellow>
        <p>{selected.name}</p>
      </BoxYellow>
    </div>
  );
}
