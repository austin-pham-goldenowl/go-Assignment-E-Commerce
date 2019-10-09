import React from "react";
import TextField from "@material-ui/core/TextField";

const _TextInput = ({ ...props }) => {
  return (
    <div>
      <TextField {...props} />
    </div>
  );
};

export default _TextInput;
