import React from "react";
import { Paper, Grid } from "@material-ui/core";
import MyTypography from "../common/MyTypography";

const OrderItemComp = ({ cart, onMouseOver }) => (
  <Paper onMouseOver={() => onMouseOver(cart)} onMouseOut={() => onMouseOver({id: "", createdAt: "", total: "", cartList: []})}>
    <Grid container>
      <Grid item lg={2}>
        <center>
          <MyTypography variant="subtitle1">ID: {cart.id}</MyTypography>
        </center>
      </Grid>
      <Grid item lg={6}>
        <center>
          <MyTypography variant="subtitle1">
            Day created: {cart.createdAt}
          </MyTypography>
        </center>
      </Grid>
      <Grid item lg={4}>
        <center>
          <MyTypography variant="subtitle1">Total: ${cart.total}</MyTypography>
        </center>
      </Grid>
    </Grid>
  </Paper>
);

export default OrderItemComp;
