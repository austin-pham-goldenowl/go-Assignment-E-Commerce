import React from "react";
import _Button from "../common/_Button";
import Box from "@material-ui/core/Box";

const CartItemRemoveComp = ({ onRemoveClick }) => {
  return (
    <Box>
      <_Button color="secondary" onClick={onRemoveClick}>
        Remove
      </_Button>
    </Box>
  );
};

export default CartItemRemoveComp;
