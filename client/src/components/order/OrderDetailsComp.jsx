import React from "react";
import _Typography from "../common/_Typography";
import { Grid, Box } from "@material-ui/core";

const OrderDetailsComp = ({ id, createdAt, total, cartList }) => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <_Typography>ID: {id}</_Typography>
      </Grid>
      <Grid item lg={6}>
        <_Typography>Day created: {createdAt}</_Typography>
      </Grid>
      {cartList}
      <Box flexDirection="flex-end">
        <_Typography>Total: {total}</_Typography>
      </Box>
    </Grid>
  );
};

export default OrderDetailsComp;
