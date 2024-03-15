/* import React, { ChangeEvent } from "react";
import { useState } from "react"; */

import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

const Formulario = () => {
  const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({
    email: "fernando@gmail.com",
    nombre: "Fernando Herrera",
    edad: 35,
  });

  /*   const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    console.log(name, value);
    setFormulario({
      ...formulario,
      [name]: value,
    });
  }; */

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          name="nombre"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input
          type="text"
          className="form-control"
          value={edad}
          name="edad"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};

export default Formulario;
