/* eslint-disable array-callback-return */
import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [booksApi, setBooksApi] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [response, setResponse] = useState(false);
  const handleSearch = (e) => {
    /* console.log(e.target.value);
    console.log(e.target.name); */
    setSearchBook(e.target.value);
  };
  const handleResetFilter = () => {
    setSearchBook("");
  };

  /*   const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); */

  let api = helpHttp();
  let url = "https://mern-books-server.herokuapp.com/api/books/";
  let options = {
    headers: {
      "x-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
    },
  };

  useEffect(() => {
    //setLoading(true); if (booksApi.length === 0)
    api.get(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let booksWithoutFilter = res.books;
        const booksFilter = booksWithoutFilter
          .filter((el) => {
            if (searchBook === "") {
              return el;
            } else if (
              el.name.toLowerCase().includes(searchBook.toLowerCase()) ||
              el.description.toLowerCase().includes(searchBook.toLowerCase())
            ) {
              return el;
            }
          })
          .map((el) => {
            return el;
          });
        setBooksApi(booksFilter);
        //setError(null);
      } else {
        setBooksApi("");
        //setError(res);
      }
      //setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBook]);

  useEffect(() => {
    api.get(url, options).then((res) => {
      let booksWithoutFilter = res.books;
      setBooksApi(booksWithoutFilter);
    });
  }, [response]);

  let urlPost = "https://mern-books-server.herokuapp.com/api/books/new/";

  const addBook = (data) => {
    //console.log(data);
    /*  setBooksApi([...booksApi, data]); */
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
      },
    };

    api.post(urlPost, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setResponse(true);
        /*  setBooksApi([...booksApi, res]); */
      } else {
        // setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: {
        "x-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
      },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = booksApi.map((el) => (el.id === data.id ? data : el));
        booksApi(newData);
      } else {
        //setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas Seguro de eleminar el registro con el id ${id}`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: {
          "content-type": "application/json",
          "x-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTdlY2I1YjczODdhMDAxNmY4MGVjMSIsIm5hbWUiOiJtYXRpYXNIZXJlZGlhIiwidXNlclR5cGUiOiJhZG1pbiIsImlhdCI6MTY1NzY1Mjg4OCwiZXhwIjoxNjU5MzgwODg4fQ.gM-5aLqho-upYFyQqgIE9m8HrSD5R6nMDec7pWB0V4k",
        },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          /*  let newData = booksApi.filter((el) => el.id !== id);
          setBooksApi(newData); */
        } else {
          //setError(res);
        }
      });
    } else {
      return;
    }
  };
  const data = {
    booksApi,
    handleSearch,
    searchBook,
    addBook,
    setBooksApi,
    deleteData,
    handleResetFilter,
    updateData,
    //error,
    //loading,
    //createData,
    //dataToEdit,
    //setDataToEdit,
    //deleteData, */
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
