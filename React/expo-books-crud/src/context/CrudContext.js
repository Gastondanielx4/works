/* eslint-disable array-callback-return */
import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { token } from "../helper/token";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [booksApi, setBooksApi] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchBook(e.target.value);
  };
  const handleResetFilter = () => {
    setSearchBook("");
  };

  /*  const [dataToEdit, setDataToEdit] = useState(null); */
  let api = helpHttp();
  let url = "https://mern-books-server.herokuapp.com/api/books/";
  let options = {
    headers: {
      "x-token": token,
    },
  };
  const apiGet = () => {
    api.get(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let booksWithoutFilter = res.books;
        setBooksApi(booksWithoutFilter);
        setError(null);
      } else {
        setBooksApi("");
        setError(res);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    if (booksApi.length === 0) {
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
          setError(null);
        } else {
          setBooksApi("");
          setError(res);
        }
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchBook]);

  let urlPost = "https://mern-books-server.herokuapp.com/api/books/new/";

  const addBook = (data) => {
    //console.log(data);
    /*  setBooksApi([...booksApi, data]); */
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token": token,
      },
    };

    api.post(urlPost, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        apiGet();
        /* api.get(url, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let booksWithoutFilter = res.books;
            setSearchBook("");
            setBooksApi(booksWithoutFilter);
          }
        }); */
        /*  api.get(url, options).then((res) => {
          let booksWithoutFilter = res.books;
          setBooksApi(booksWithoutFilter);
        }); */
        /*  setResponse(true); */
        /*  setBooksApi([...booksApi, res]); */
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data, id) => {
    let endpoint = `${url}/${id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: {
        "x-token": token,
      },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        apiGet();
        let newData = booksApi.map((el) => (el.id === data.id ? data : el));
        booksApi(newData);
      } else {
        setError(res);
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
          "x-token": token,
        },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          apiGet();
          /*  let newData = booksApi.filter((el) => el.id !== id);
          setBooksApi(newData); */
        } else {
          setError(res);
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
    error,
    loading,
    //createData,
    //dataToEdit,
    //setDataToEdit,
    //deleteData, */
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
