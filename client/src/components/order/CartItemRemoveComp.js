import React from "react";
import Box from "@material-ui/core/Box";
import MyButton from "../common/MyButton";

const CartItemRemoveComp = ({ onRemoveClick }) => (
  <Box>
    <MyButton color="secondary" onClick={onRemoveClick}>
      Remove
    </MyButton>
  </Box>
);

export default CartItemRemoveComp;
