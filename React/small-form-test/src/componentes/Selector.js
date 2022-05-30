    import * as React from 'react';
    import InputLabel from '@mui/material/InputLabel';
    import MenuItem from '@mui/material/MenuItem';
    import FormControl from '@mui/material/FormControl';
    import Select from '@mui/material/Select';
    
    const dataBase = [
        {id:1,
        name: "---------------",
        rol: "----------------"},
        {id:2,
        name: "Matias Heredia",
        rol: "Erudito"},
        {id:3,
        name: "Benjamin Quattrocchi",
        rol: "Aprendiz"},
        {id:4,
        name: "Agustina Heredia",
        rol: "Fenomeno"}
    ]
    export default function SelectLabels() {
        const [db, setDb] = React.useState({dataBase});
         const [db1, setDb1] = React.useState({dataBase});

        const handleChange = (e) => {
            setDb(e.target.value);
            setDb1(e.target.value)
        };
         const handleChange1 = (e) => {
            setDb(e.target.value);
            setDb1(e.target.value);
        };
        
        return (
            <div>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={db}
          label="Name"
          onChange={handleChange}
          >
           {dataBase.map((el) =><MenuItem key={el.id} value={el.id}>{el.name}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
        <Select
          value={db1}
          onChange={handleChange1}
          displayEmpty
          inputProps={{ 'aria-label': 'Rol' }}
        >
          {dataBase.map((el) =><MenuItem key={el.id} value={el.id}>{el.rol}</MenuItem>)}
        </Select>
      </FormControl> 
    </div>
  );
}