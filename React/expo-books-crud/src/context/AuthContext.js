import React, { useState, useContext } from "react";
import { helpHttp } from "../helper/helpHttp";
import CrudContext from "./CrudContext";
const authContext = React.createContext();

let api = helpHttp();

export function useAuth() {
  return useContext(authContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const { setError, setToken } = useContext(CrudContext);

  function logout() {
    console.log("logout");

    setUser(false);
  }

  let urlAuth = "https://mern-books-server.herokuapp.com/api/auth";

  const authLogin = (email, password) => {
    let options = {
      body: {
        email,
        password,
      },
      headers: {
        "content-type": "application/json",
      },
    };
    api.post(urlAuth, options).then((res) => {
      if (!res.err) {
        setToken(res.user.token);
        console.log(res);
        setUser(true);
        /* apiGet(); */
        /* setContentAlert({
          title: "Book added!",
          icon: "success",
          type: "show",
        }); */
        /* setAlertOk(true); */
      } else {
        setError(res);
      }
    });
  };

  const value = { user, logout, authLogin };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
