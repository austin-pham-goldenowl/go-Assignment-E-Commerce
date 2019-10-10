import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';

const _Checkbox = ({ label, value, ...cbProps }) => {
    return (
    <FormControlLabel
      control={<Checkbox {...cbProps} />}
      value={value}
      label={label}
    />
    // <div></div>
  );
};

export default _Checkbox;
