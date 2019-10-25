import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProductListComp from "../components/product/ProductListComp";
import CartList from "../containers/CartList";

const HomeRoute = ({ isLoginSuccess, currentUser, ...props }) => (
  <Route exact path="/">
    <Grid container spacing={3}>
      <Grid item xs={!!currentUser && !currentUser.admin ? 8 : 12}>
        <ProductListComp isLoginSuccess={isLoginSuccess} {...props} />
      </Grid>
      <Grid item xs={!!currentUser && !currentUser.admin ? 4 : 0}>
        {(!!currentUser && !currentUser.admin) && <CartList uid={currentUser && currentUser.id} />}
      </Grid>
    </Grid>
  </Route>
);

export default HomeRoute;
