/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { helpHttp } from "./helpHttp";

export const apiGet = (url, options) => {
  const { setBooksApi, setError, setLoading } = useContext(CrudContext);
  helpHttp()
    .get(url, options)
    .then((res) => {
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
