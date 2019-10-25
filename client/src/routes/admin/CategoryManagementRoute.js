import React from "react";
import { Route, Redirect } from "react-router-dom";
import CategoryManagement from "../../containers/admin/CategoryManagement";

const CategoryManagementRoute = ({
  currentUser,
  categories,
  reloadData
}) => (
  <Route path="/admin/categories">
    {!!currentUser ? (
      <CategoryManagement
        categories={categories}
        reloadData={reloadData}
      />
    ) : (
      <Redirect to="/" />
    )}
  </Route>
);

export default CategoryManagementRoute;
