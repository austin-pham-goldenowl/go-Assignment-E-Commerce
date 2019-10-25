import React from "react";
import { Route, Redirect } from "react-router-dom";
import OrderManagement from "../../containers/admin/OrderManagement";

const OrderManagementRoute = ({ currentUser, categories, products }) => (
  <Route path="/admin/orders">
    {!!currentUser ? (
      <OrderManagement />
    ) : (
      <Redirect to="/" />
    )}
  </Route>
);

export default OrderManagementRoute;
