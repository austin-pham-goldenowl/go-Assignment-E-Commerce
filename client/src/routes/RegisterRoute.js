import React from "react";
import { Route, Redirect } from "react-router-dom";
import Register from "../containers/Register";

const RegisterRoute = ({ isLoginSuccess, userRegister }) => {
  return (
    <Route path="/register">
      {!isLoginSuccess ? (
        <Register userRegister={userRegister} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default RegisterRoute;
