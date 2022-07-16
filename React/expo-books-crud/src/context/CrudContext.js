import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [booksApi, setBooksApi] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const handleSearch = (e) => {
    /* console.log(e.target.value);
    console.log(e.target.name); */
    setSearchBook(e.target.value);
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
        setBooksApi(res.books);

        //setError(null);
      } else {
        setBooksApi(null);
        //setError(res);
      }
      //setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchBook.length > 0) {
    } else {
      console.log("no");
    }
  }, [searchBook, booksApi]);

  /*   const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
 */
  /*     api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setBooksApi([...booksApi, res]);
      } else {
        setError(res);
      }
    });
  }; */

  /*   const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = booksApi.map((el) => (el.id === data.id ? data : el));
        booksApi(newData);
      } else {
        setError(res);
      }
    });
  }; */

  /* const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas Seguro de eleminar el registro con el id ${id}`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = booksApi.filter((el) => el.id !== id);
          setBooksApi(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  }; */
  const data = {
    booksApi,
    handleSearch,
    searchBook,
    //error,
    //loading,
    /* createData, */
    //dataToEdit,
    //setDataToEdit,
    /*    updateData,
    deleteData, */
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
