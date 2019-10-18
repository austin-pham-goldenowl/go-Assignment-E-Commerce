import React from "react";
import { Route, Redirect } from "react-router-dom";
import OrderHistory from "../containers/OrderHistory";

const HistoryRoute = ({ isLoginSuccess }) => (
  <Route path="/history">
    {isLoginSuccess ? <OrderHistory /> : <Redirect to="/login" />}
  </Route>
);

export default HistoryRoute;
