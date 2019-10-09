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

//                  onClick passed down from TodoList
const CartItemComp = ({ item, note }) => (
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
          <Typography>{note}</Typography>
        </ExpansionPanelDetails>
        <Divider />
        <div style={{ float: "right" }}>
          <Button color="secondary">Delete</Button>
        </div>
      </ExpansionPanel>
    </Grid>
  </center>
);

export default CartItemComp;
