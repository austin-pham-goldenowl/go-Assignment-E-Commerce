import React from "react";
import { Route, Redirect } from "react-router-dom";
import History from "../containers/History";

const HistoryRoute = ({ isLoginSuccess, admin }) => (
  <Route path="/history">
    {isLoginSuccess ? !admin ? <History /> : <Redirect to="/" /> : <Redirect to="/login" />}
  </Route>
);

export default HistoryRoute;
