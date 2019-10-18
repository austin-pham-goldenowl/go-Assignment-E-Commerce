import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import GamepadIcon from "@material-ui/icons/Gamepad";
import MyTypography from "../common/MyTypography";
import MyButton from "../common/MyButton";
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
  children2,
  children3
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
          <MyTypography
            variant="h6"
            className={classes.title}
            onClick={() => {
              history.push("/");
              onHomeClick();
            }}
          >
            eShop
          </MyTypography>
          <MyButton
            color="inherit"
            onClick={() => {
              history.push("/");
              onHomeClick();
            }}
          >
            Home
          </MyButton>
          <CategoryDrawerComp
            categoryList={categoryList}
            onClick={onDrawerClick}
          />
          {children1}
          {children2}
          {children3}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
