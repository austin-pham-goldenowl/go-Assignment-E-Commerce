import React from "react";
import { Grid } from "@material-ui/core";
import OrderListComp from "./OrderListComp";
import OrderDetailsComp from "./OrderDetailsComp";

const OrderHistoryComp = ({ orderList, cart, onMouseOver }) => (
  <Grid container>
    <Grid item lg={8}>
      <OrderListComp orderList={orderList} onMouseOver={onMouseOver} />
    </Grid>
    <Grid item lg={4}>
      <br />
      <br />
      <OrderDetailsComp cart={cart} />
    </Grid>
  </Grid>
);

export default OrderHistoryComp;
