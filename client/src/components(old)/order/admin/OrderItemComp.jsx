import React from "react";
// import PropTypes from "prop-types";
//MUI
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
// import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
// import ItemDialog from "./common/ItemDialog";
import OrderDetailsPopoverComp from "./OrderDetailsPopoverComp";

const OrderItemComp = ({ item, note }) => {
  return (
    <center>
      <Grid xs={10} sm={8} md={6}>
        <ExpansionPanel
        //   style={{ display: deleted ? "none" : "inline-block", width: 320 }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelbh-content"
            id="panelbh-header"
            // style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <Typography>{item}</Typography>
          </ExpansionPanelSummary>
          <Divider />

          <ExpansionPanelDetails
            style={{
              textAlign: "left",
              backgroundColor: "#E5E5E5"
            }}
          >
            <OrderDetailsPopoverComp />
            <OrderStatusSelectComp />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Accept"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checkedH"
                />
              }
              label="Paid"
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </center>
  );
};

export default OrderItemComp;
