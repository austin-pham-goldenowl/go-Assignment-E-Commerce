
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import OrderItemComp from "./OrderItemComp";
import MyTypography from "../common/MyTypography";

const OrderListComp = ({ orderList, onMouseOver }) => (
  <React.Fragment>
    <CssBaseline />
    <main>
      <Container maxWidth="md">
        <center>
          <br />
          <br />
          <MyTypography variant="h4">Order History</MyTypography>
          <br />
        </center>
        <Grid container spacing={2}>
          {orderList.map(order => (
            <Grid item lg={6}>
              <OrderItemComp cart={order} onMouseOver={onMouseOver} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </React.Fragment>
);

export default OrderListComp;
