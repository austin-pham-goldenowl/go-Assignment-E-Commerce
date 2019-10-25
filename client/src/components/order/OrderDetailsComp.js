import React from "react";
import { Grid } from "@material-ui/core";
import MyTypography from "../common/MyTypography";
import CartItemComp from "./CartItemComp";

const OrderDetailsComp = ({ cart }) => (
  <Grid container lg={12} spacing={1} >
    {cart.length !== 0 ? (
      cart.map(cartItem => (
        <Grid item lg={4}>
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
        </Grid>
      ))
    ) : (
      <Grid item lg={4}>
        <CartItemComp />
      </Grid>
    )}
  </Grid>
);

export default OrderDetailsComp;
