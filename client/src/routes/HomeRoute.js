import React from "react";
import { Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProductListComp from "../components/product/ProductListComp";
import CartListCont from "../containers/CartListCont";

const HomeRoute = ({ isLoginSuccess, currentUser, ...props }) => (
  <Route exact path="/">
    <Grid container spacing={3}>
      <Grid item xs={isLoginSuccess ? 8 : 12}>
        <ProductListComp isLoginSuccess={isLoginSuccess} {...props} />
      </Grid>
      <Grid item xs={isLoginSuccess ? 4 : 0}>
        {isLoginSuccess && <CartListCont uid={currentUser && currentUser.id} />}
      </Grid>
    </Grid>
  </Route>
);

export default HomeRoute;
