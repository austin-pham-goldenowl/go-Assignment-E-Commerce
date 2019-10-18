import React from "react";
import { Route, Redirect } from "react-router-dom";
import LogInCont from "../containers/LogInCont";

const AuthRoute = ({ isLoginSuccess, userLogin }) => (
  <Route path="/login">
    {!isLoginSuccess ? (
      <LogInCont userLogin={userLogin} />
    ) : (
      <Redirect to="/" />
    )}
  </Route>
);

export default AuthRoute;
