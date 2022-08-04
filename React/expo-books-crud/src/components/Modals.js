import Edit from "@mui/icons-material/Edit";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import SendIcon from "@mui/icons-material/Send";
import CrudContext from "../context/CrudContext";

const Modals = ({ el }) => {
  let { name, image, publicationDate, id, description, pages, excerpt } = el;
  const { updateDate } = useContext(CrudContext);

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
    description,
    pages,
    publicationDate,
    excerpt,
    image,
  };
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [form, setForm] = useState(initialForm);
  const handleEdit = () => {
    openModal1();
  };
  const sendForm = () => {
    updateDate(form, id);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <IconButton el={el} onClick={handleEdit} aria-label="edit">
        <Edit />
      </IconButton>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <form onSubmit={sendForm}>
          <div>
            <div className="div-one-book">
              <img
                style={{
                  height: "21rem",
                  width: "14rem",
                  marginRight: "1rem",
                  borderRadius: "7px",
                }}
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
                  style={{ margin: "0.5rem 0" }}
                  focused
                  onChange={handleChange}
                  defaultValue={form.name}
                />
                {/* <p>{description}</p> */}
                <TextField
                  id="outlined-multiline-static"
                  label="Descripción"
                  name="description"
                  multiline
                  rows={4}
                  style={{ margin: "0.5rem 0" }}
                  focused
                  onChange={handleChange}
                  defaultValue={form.description}
                />
                <div style={{ display: "flex" }}>
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Fecha de Publicación"
                    variant="outlined"
                    type="text"
                    name="publishDate"
                    style={{ margin: "0.5rem 1rem 0.5rem 0", width: "15rem" }}
                    focused
                    onChange={handleChange}
                    defaultValue={form.publicationDate}
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
                    style={{ margin: "0.5rem 0" }}
                    focused
                    onChange={handleChange}
                    defaultValue={form.pages}
                    /* value={form.pages} */
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
                  style={{ margin: "0.5rem 0" }}
                  focused
                  onChange={handleChange}
                  defaultValue={form.image}
                />
              </div>
            </div>
            <div
            /* style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }} */
            >
              <TextField
                id="outlined-multiline-static"
                label="Excerpt"
                name="excerpt"
                multiline
                rows={12}
                style={{ width: "100%", margin: "1rem 0" }}
                onChange={handleChange}
                defaultValue={form.excerpt}
                focused
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  value="Enviar"
                  endIcon={<SendIcon />}
                >
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Modals;