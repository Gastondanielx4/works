import React, { useState, useContext } from "react";
import { helpHttp } from "../helper/helpHttp";
import { token } from "../helper/token1";
import CrudContext from "./CrudContext";
const authContext = React.createContext();

let api = helpHttp();

export function useAuth() {
  return useContext(authContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const { setError, setToken } = useContext(CrudContext);

  function signin(email, password) {
    //hook with sign in api
    console.log("sign in");

    /*     const foundUser = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (foundUser.length) setUser(foundUser[0]);
    else throw new Error("Wrong email or password"); */
  }

  function logout() {
    //hook with logout api
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

  const value = { user, signin, logout, authLogin };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}
