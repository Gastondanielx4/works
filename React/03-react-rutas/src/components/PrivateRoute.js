import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  return auth ? <Component /> : <Navigate to="/login" />;
};

let auth;
auth = true;
auth = null;

export default PrivateRoute;
