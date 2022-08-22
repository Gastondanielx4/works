import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CrudContext from "../context/CrudContext";
import validationsForm from "../helper/FormsValidations";

const initialForm = {
  name: "",
  description: "",
  pages: "",
  publicationDate: "",
  excerpt: "",
  image: "",
};

export const FormCreateBook = () => {
  const { addBook } = useContext(CrudContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setErrors(validationsForm(form));
  }, [form]);

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(form);
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <h5>Form</h5>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "75vh",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          error={errors.name}
          size="small"
          id="outlined-error-helper-text"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          helperText={errors.name}
        />
        <TextField
          error={errors.description}
          id="outlined-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.description}
          required
          helperText={errors.description}
        />
        <TextField
          error={errors.pages}
          size="small"
          id="outlined-basic"
          label="Pages"
          variant="outlined"
          type="text"
          name="pages"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.pages}
          required
          helperText={errors.pages}
        />
        <TextField
          error={errors.publicationDate}
          size="small"
          id="outlined-basic"
          label="Publication Date (dd/mm/yyyy)"
          variant="outlined"
          type="text"
          name="publicationDate"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.publicationDate}
          required
          helperText={errors.publicationDate}
        />
        <TextField
          error={errors.excerpt}
          id="outlined-multiline-static"
          label="Excerpt"
          name="excerpt"
          multiline
          rows={6}
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.excerpt}
          required
          helperText={errors.excerpt}
        />
        <TextField
          error={errors.image}
          size="small"
          id="outlined-basic"
          label="URL Image"
          variant="outlined"
          type="text"
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.image}
          required
          helperText={errors.image}
        />
        <input
          type="submit"
          value="Send"
          style={{ maxWidth: "20rem", margin: "0 auto" }}
        />
      </form>
    </div>
  );
};
