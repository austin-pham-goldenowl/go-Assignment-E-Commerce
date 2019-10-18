import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const MyCheckbox = ({ label, value, ...cbProps }) => (
  <FormControlLabel
    control={<Checkbox {...cbProps} />}
    value={value}
    label={label}
  />
);

export default MyCheckbox;
