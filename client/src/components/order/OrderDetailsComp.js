import React from "react";
import { Grid } from "@material-ui/core";
import MyTypography from "../common/MyTypography";
import CartItemComp from "./CartItemComp";

const OrderDetailsComp = ({ cart }) => (
  <React.Fragment>
    <center>
      <MyTypography variant="h4">Details</MyTypography>
      <br />
    </center>
    <Grid container spacing={2}>
      <Grid item lg={6}>
        <MyTypography variant="button">ID: {cart.id}</MyTypography>
      </Grid>
      <Grid item lg={6}>
        <MyTypography variant="button">
          Day created: {cart.createdAt.substring(0, 10)}
        </MyTypography>
      </Grid>
      <Grid item lg={12}>
        {cart.cartList.length !== 0 ? (
          cart.cartList.map(cartItem => (
            <CartItemComp
              title={cartItem.title}
              cartItemNumber={
                <MyTypography variant="overline">
                  {cartItem.quantity} x ${cartItem.price} =
                </MyTypography>
              }
              cartItemRemove={
                <MyTypography variant="overline">${cartItem.cost}</MyTypography>
              }
            />
          ))
        ) : (
          <CartItemComp />
        )}
      </Grid>
      <MyTypography variant="button" style={{ marginTop: 2 }}>
        Total: {cart.total}
      </MyTypography>
    </Grid>
  </React.Fragment>
);

export default OrderDetailsComp;
