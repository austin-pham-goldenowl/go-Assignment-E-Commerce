import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MyButton from "./MyButton";
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});
const MyDrawer = ({ text, list, onClick, ...props }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = (list, side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Divider />
        {list.map(item => (
          <div>
            <Divider />
            <ListItem button key={item.id} onClick={() => onClick(item.id)}>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider />
          </div>
        ))}
        <Divider />
      </List>
    </div>
  );
  return (
    <div>
      {/* <Button onClick={toggleDrawer("left", true)}>Open Left</Button> */}
      <MyButton color="inherit" onClick={toggleDrawer("right", true)}>
        {text}
      </MyButton>
      <SwipeableDrawer
        {...props}
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList(list, "right")}
      </SwipeableDrawer>
    </div>
  );
};

export default MyDrawer;
