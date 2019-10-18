import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MyTypography from "../common/MyTypography";
import Box from "@material-ui/core/Box";

const CartItemComp = ({ title, cartItemNumber, cartItemRemove }) => (
  <Paper>
    <Box display="flex">
      <Box flexGrow={1}>
        <Grid container>
          <Grid item xs={cartItemNumber ? 6 : 12}>
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
              {title}
            </MyTypography>
          </Grid>
          {cartItemNumber}
        </Grid>
      </Box>
      {cartItemRemove}
    </Box>
  </Paper>
);
export default CartItemComp;
