import React, { useState } from "react";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
import _TextInput from "../common/_TextInput";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";

const CartItemComp = ({
  title,
  quantity,
  onRemoveClick,
  onIncreaseClick,
  onDecreaseClick
}) => {
  return (
    <Paper>
      <Box display="flex">
        <Box flexGrow={1}>
          <Grid container>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={4}>
                  <_Button
                    disabled={quantity === 1}
                    color="primary"
                    onClick={onDecreaseClick}
                  >
                    -
                  </_Button>
                </Grid>
                <Grid item xs={4}>
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
                    {+quantity}
                  </_Typography>
                </Grid>
                <Grid item xs={4}>
                  <_Button color="primary" onClick={onIncreaseClick}>
                    +
                  </_Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <_Button color="secondary" onClick={onRemoveClick}>
            Remove
          </_Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CartItemComp;
