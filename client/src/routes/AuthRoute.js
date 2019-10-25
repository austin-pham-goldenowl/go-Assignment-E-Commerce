import React from "react";
import { Route, Redirect } from "react-router-dom";
import Authenticate from "../containers/Authenticate";

const AuthRoute = ({ isLoginSuccess, userLogin }) => (
  <Route path="/login">
    {!isLoginSuccess ? (
      <Authenticate userLogin={userLogin} />
    ) : (
      <Redirect to="/" />
    )}
  </Route>
);

export default AuthRoute;
