/* eslint-disable array-callback-return */
import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helper/helpHttp";
import { token1 } from "../helper/token1";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [booksApi, setBooksApi] = useState([]);
  const [booksFilter, setBooksFilter] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertOk, setAlertOk] = useState(false);
  const [contentAlert, setContentAlert] = useState({});
  const [isDelete, setIsDelete] = useState(null);
  const [token, setToken] = useState("");

  const handleSearch = (e) => {
    search(e.target.value);
  };
  const search = (searchBooks) => {
    const booksWithFilter = booksApi
      .filter((el) => {
        if (searchBooks === "") {
          return el;
        } else if (
          el.name.toLowerCase().includes(searchBooks.toLowerCase()) ||
          el.description.toLowerCase().includes(searchBooks.toLowerCase())
        ) {
          return el;
        }
      })
      .map((el) => {
        return el;
      });
    setBooksFilter(booksWithFilter);
  };

  let api = helpHttp();
  let url = "https://mern-books-server.herokuapp.com/api/books/";
  let options = {
    headers: {
      "x-token": token1,
    },
  };
  const apiGet = () => {
    setLoading(true);
    api.get(url, options).then((res) => {
      if (!res.err) {
        let booksWithoutFilter = res.books;
        setBooksApi(booksWithoutFilter);
      } else {
        setBooksApi("");
        setError(res);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let urlPost = "https://mern-books-server.herokuapp.com/api/books/new/";

  const addBook = (data) => {
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token": token,
      },
    };
    api.post(urlPost, options).then((res) => {
      if (!res.err) {
        apiGet();
        setContentAlert({
          title: "Book added!",
          icon: "success",
          type: "show",
        });
        setAlertOk(true);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data, id) => {
    let endpoint = `${url}/${id}`;
    let options = {
      body: data,
      headers: {
        "content-type": "application/json",
        "x-token": token,
      },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        apiGet();
        setContentAlert({
          title: "Book updated!",
          icon: "success",
          type: "show",
        });
        setAlertOk(true);
      } else {
        setError(res);
      }
    });
  };

  const handleDelete = (confirm) => {
    if (confirm) {
      let endpoint = `${url}/${isDelete}`;
      let options = {
        headers: {
          "content-type": "application/json",
          "x-token": token,
        },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          apiGet();
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  const deleteData = (id, name) => {
    setContentAlert({
      title: name,
      icon: "",
      type: "confirm",
    });
    setAlertOk(true);
    setIsDelete(id);
  };
  const data = {
    booksApi,
    handleSearch,
    addBook,
    setBooksApi,
    deleteData,
    updateData,
    error,
    loading,
    alertOk,
    setAlertOk,
    contentAlert,
    setIsDelete,
    handleDelete,
    booksFilter,
    setError,
    setToken,
    setLoading,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
