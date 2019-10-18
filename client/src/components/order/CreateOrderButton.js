import React from "react";
import MyButton from "../common/MyButton";

const CreateOrderButton = ({ ...props }) => (
  <MyButton fullWidth variant="contained" color="primary" {...props}>
    Create order
  </MyButton>
);

export default CreateOrderButton;
