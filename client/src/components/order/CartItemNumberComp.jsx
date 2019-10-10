import React from "react";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
import Grid from "@material-ui/core/Grid";

const CartItemNumberComp = ({ quantity, onIncreaseClick, onDecreaseClick }) => {
  return (
    <Grid item xs={6}>
      <Grid container>
        <Grid item xs={4}>
          <_Button
            disabled={quantity === 1}
            color="primary"
            onClick={onDecreaseClick}
          >
            -
          </_Button>
        </Grid>
        <Grid item xs={4}>
          <_Typography
            variant="overline"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 200,
              display: "inline-block",
              whiteSpace: "nowrap"
            }}
          >
            {+quantity}
          </_Typography>
        </Grid>
        <Grid item xs={4}>
          <_Button color="primary" onClick={onIncreaseClick}>
            +
          </_Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartItemNumberComp;
