import React from "react";
import Button from "@material-ui/core/Button";

const _Button = ({ ...props }) => {
  return (
    <div>
      <Button {...props} />
    </div>
  );
};

export default _Button;
