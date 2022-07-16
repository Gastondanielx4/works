import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import CrudContext from "../context/CrudContext";

const CustomTextField = styled(TextField)`
  margin: 2rem 0 2rem 0;
  width: 18rem;
  position: relative;
`;

export const SearchBook = () => {
  const { bookSearch, handleSearch } = useContext(CrudContext);
  return (
    <div className="div-search">
      <CustomTextField
        type="search"
        id="standard-basic"
        label="Name or description"
        variant="standard"
        name="busqueda"
        /* value={buscar} */
        onChange={handleSearch}
      />
      <span className="clear-search"></span>
    </div>
  );
};
