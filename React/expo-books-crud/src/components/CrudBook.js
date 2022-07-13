import React, { useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import CardBook from "./CardBook";

const CrudBook = () => {
  const [booksApi, setBooksApi] = useState([]);
  let api = helpHttp();
  let url = "https://mern-books-server.herokuapp.com/api/books/";
  let options = {
    headers: {
      "x-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
    },
  };
  useEffect(() => {
    //setLoading(true);
    if (booksApi.length === 0) {
      api.get(url, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          setBooksApi(res.books);
          //setDb(res);
          //dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          //setError(null);
          console.log(booksApi);
        } else {
          //setDb(null);
          //dispatch({ type: TYPES.NO_DATA });
          //setError(res);
        }
        //setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*   const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        // setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
  }; */
  return (
    <div className="grid-1-4">
      {booksApi.map((el) => (
        <CardBook
          key={el.id}
          name={el.name}
          description={el.description}
          pages={el.pages}
          image={el.image}
        />
      ))}
    </div>
  );
};

export default CrudBook;
