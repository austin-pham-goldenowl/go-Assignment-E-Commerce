import React from "react";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
import _TextInput from "../common/_TextInput";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const CartItemComp = ({ title, cartItemNumber, cartItemRemove }) => {
  return (
    <Paper>
      <Box display="flex">
        <Box flexGrow={1}>
          <Grid container>
            <Grid item xs={cartItemNumber ? 6 : 12}>
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
                {title}
              </_Typography>
            </Grid>
            {cartItemNumber}
          </Grid>
        </Box>
        {cartItemRemove}
      </Box>
    </Paper>
  );
};

export default CartItemComp;
