import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import { helpHttp } from "../helper/helpHttp";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;

export const OneBookPage = () => {
  /*  const { booksApi } = useContext(CrudContext);
  const [bookOpen, setBookOpen] = useState({});
  let { id } = useParams();
  useEffect(() => {
    if (booksApi !== undefined) {
      const elBookOpen = booksApi.find((book) => book.id === id);
      setBookOpen(elBookOpen);
    }
  }, []); */

  const [bookOpen, setBookOpen] = useState({});
  let api = helpHttp();
  let navigate = useNavigate();
  let { id } = useParams();
  let url = `https://mern-books-server.herokuapp.com/api/books/${id}`;
  let options = {
    headers: {
      "x-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
    },
  };

  useEffect(() => {
    api.get(url, options).then((res) => {
      if (!res.err) {
        setBookOpen(res.book);
        //console.log(bookOpen);
      } else {
        setBookOpen(null);
        //setError(res);
      }
      //setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { description, name, excerpt, image, pages, publicationDate } = bookOpen;

  return (
    <main>
      <CustomizedButton onClick={() => navigate(`/`)}>
        Back to book
      </CustomizedButton>
      <br />
      <div className="div-one-book">
        <img
          style={{ height: "30rem", width: "20rem", marginRight: "2rem" }}
          src={image}
          alt={`Foto de portada del libro: ${name}`}
        />
        <div>
          <h2 style={{ marginTop: "3rem" }}>{name}</h2>
          <p>{description}</p>
          <h5>{publicationDate}</h5>
          <h5>{`${pages} pages`}</h5>
        </div>
      </div>
      <br />
      <h3>Excerpt</h3>
      <p>{excerpt}</p>
    </main>
  );
};
