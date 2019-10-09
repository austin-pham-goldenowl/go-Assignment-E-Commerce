import React from "react";
import CartItemComp from "./CartItemComp";
import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const cartItems = [21, 52, 33];
let sum = 0;

const CartListComp = () => (
  <div>
    <center>
      <br />
      {cartItems.map(cartItem => {
        sum += cartItem;
        return <CartItemComp />;
      })}
      <Grid xs={10} sm={8} md={6}>
        <Box
          display="flex"
          justifyContent="flex-end"
          style={{ marginRight: 5 }}
        >
          <TextField
            disabled
            id="total"
            label="Total"
            defaultValue={sum}
            margin="normal"
            variant="filled"
          />
        </Box>
      </Grid>
    </center>
  </div>
);

export default CartListComp;
