import React from "react";
import LogInCont from "../containers/LogInCont";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ isLoginSuccess, userLogin }) => {
  return (
    <Route path="/login">
      {!isLoginSuccess ? (
        <LogInCont userLogin={userLogin} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
};

export default AuthRoute;
