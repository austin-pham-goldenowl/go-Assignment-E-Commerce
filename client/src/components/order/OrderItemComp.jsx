import React from "react";
import { Paper, Grid } from "@material-ui/core";
import _Typography from "../common/_Typography";

const OrderItemComp = ({ id, createdAt }) => {
  return (
    <Paper>
      <Grid container>
        <Grid item lg={5}>
          <_Typography>ID: {id}</_Typography>
        </Grid>
        <Grid item lg={7}>
          <_Typography>Day created: {createdAt}</_Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderItemComp;
