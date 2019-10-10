import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";
import IconButton from "@material-ui/core/IconButton";
import GamepadIcon from "@material-ui/icons/Gamepad";
import CategoryDrawerComp from "./CategoryDrawerComp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavigationBar = ({
  categoryList,
  onDrawerClick,
  onHomeClick,
  history,
  children1,
  children2
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              history.push("/");
              onHomeClick();
            }}
          >
            <GamepadIcon />
          </IconButton>
          <_Typography
            variant="h6"
            className={classes.title}
            onClick={() => {
              history.push("/");
              onHomeClick();
            }}
          >
            eShop
          </_Typography>
          <_Button
            color="inherit"
            onClick={() => {
              history.push("/");
              onHomeClick();
            }}
          >
            Home
          </_Button>
          <CategoryDrawerComp
            categoryList={categoryList}
            onClick={onDrawerClick}
          />
          {children1}
          {children2}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
