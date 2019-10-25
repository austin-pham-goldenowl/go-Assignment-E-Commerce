import React from "react";
import { Route, Redirect } from "react-router-dom";
import ProductManagement from "../../containers/admin/ProductManagement";

const ProductManagementRoute = ({
  currentUser,
  categories,
  products,
  reloadData
}) => (
  <Route path="/admin/products">
    {!!currentUser ? (
      <ProductManagement
        categories={categories}
        products={products}
        reloadData={reloadData}
      />
    ) : (
      <Redirect to="/" />
    )}
  </Route>
);

export default ProductManagementRoute;
