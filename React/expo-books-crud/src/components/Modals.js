import Edit from "@mui/icons-material/Edit";
import { IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = ({ el, publishDate }) => {
  let { name, image, publicationDate, id, description, pages, excerpt } = el;
  /*  const [publishDate, setPublishDate] = useState("");
  useEffect(() => {
    if (publicationDate.length > 10) {
      let date = new Date(publicationDate);
      let formatted_date =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      setPublishDate(formatted_date);
      setForm({ ...form, [publicationDate]: publishDate });
    }
    if (publicationDate.length <= 10) {
      setPublishDate(publicationDate);
      setForm({ ...form, [publicationDate]: publishDate });
    }
  }, []); */
  let initialForm = {
    name,
    image,
    publicationDate: publishDate,
    description,
    pages,
    excerpt,
  };
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [form, setForm] = useState(initialForm);
  const handleEdit = () => {
    openModal1();
  };

  return (
    <div>
      <IconButton el={el} onClick={handleEdit} aria-label="edit">
        <Edit />
      </IconButton>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <div>
          <div className="div-one-book">
            <img
              style={{ height: "21rem", width: "14rem", marginRight: "1rem" }}
              src={image}
              alt={`Foto de portada del libro: ${name}`}
            />
            <div className="info-one-book">
              <h4>{name}</h4>
              <TextField
                size="small"
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
                type="text"
                name="name"
                focused
                /* onChange={handleChange} */
                value={form.name}
              />
              {/* <p>{description}</p> */}
              <TextField
                id="outlined-multiline-static"
                label="Descripción"
                name="description"
                multiline
                rows={4}
                focused
                /* onChange={handleChange} */
                value={form.description}
              />
              <div style={{ display: "flex" }}>
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Fecha de Publicación"
                  variant="outlined"
                  type="text"
                  name="publishDate"
                  focused
                  /*  onChange={handleChange} */
                  value={form.publicationDate}
                />
                {/* <p style={{ marginRight: ".5rem" }}>Publish date:</p>
                <p style={{ color: "#999" }}>{publishDate}</p> */}
                <TextField
                  size="small"
                  id="outlined-basic"
                  label="Páginas"
                  variant="outlined"
                  type="text"
                  name="pages"
                  focused
                  /*  onChange={handleChange} */
                  value={form.pages}
                />
              </div>
              {/*  <p style={{ color: "#999" }}>{`${pages} pages`}</p> */}
              <TextField
                size="small"
                id="outlined-basic"
                label="URL Imagen"
                variant="outlined"
                type="text"
                name="image"
                focused
                /* onChange={handleChange} */
                value={form.image}
              />
            </div>
          </div>
          <br />
          <TextField
            id="outlined-multiline-static"
            label="Excerpt"
            name="excerpt"
            multiline
            rows={6}
            /* onChange={handleChange} */
            defaultValue={form.excerpt}
          />
        </div>
        <input
          type="submit"
          value="Enviar"
          style={{ maxWidth: "20rem", margin: "0 auto" }}
        />
      </Modal>
    </div>
  );
};

export default Modals;
