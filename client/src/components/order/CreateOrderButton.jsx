import React from "react";
import _Button from "../common/_Button";

const CreateOrderButton = ({ ...props }) => {
  return (
    <_Button fullWidth variant="contained" color="primary" {...props}>
      Create order
    </_Button>
  );
};

export default CreateOrderButton;
