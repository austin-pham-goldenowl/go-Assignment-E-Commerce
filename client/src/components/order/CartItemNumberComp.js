import React from "react";
import Grid from "@material-ui/core/Grid";
import MyTypography from "../common/MyTypography";
import MyButton from "../common/MyButton";

const CartItemNumberComp = ({ quantity, onIncreaseClick, onDecreaseClick }) => (
  <Grid item xs={6}>
    <Grid container>
      <Grid item xs={4}>
        <MyButton
          disabled={quantity === 1}
          color="primary"
          onClick={onDecreaseClick}
        >
          -
        </MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyTypography
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
        </MyTypography>
      </Grid>
      <Grid item xs={4}>
        <MyButton color="primary" onClick={onIncreaseClick}>
          +
        </MyButton>
      </Grid>
    </Grid>
  </Grid>
);

export default CartItemNumberComp;
