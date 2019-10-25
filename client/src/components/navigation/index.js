import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import GamepadIcon from "@material-ui/icons/Gamepad";
import MyTypography from "../common/MyTypography";
import MyButton from "../common/MyButton";
import CategoryDrawerComp from "./CategoryDrawerComp";
import AuthButton from "./AuthButton";
import UserButton from "./UserButton";
import MenuButton from "./MenuButton";

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

const NavigationBar = ({ states, actions }) => {
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
            onClick={actions.onHomeClick}
          >
            <GamepadIcon />
          </IconButton>
          <MyTypography
            variant="h6"
            className={classes.title}
            onClick={actions.onHomeClick}
          >
            eShop
          </MyTypography>
          <MyButton color="inherit" onClick={actions.onHomeClick}>
            Home
          </MyButton>
          <CategoryDrawerComp
            categoryList={states.categories.filter(
              category => category.deleted === false
            )}
            onClick={actions.onCategoryClick}
          />
          <AuthButton
            isLoginSuccess={states.isLoginSuccess}
            routeChange={actions.routeChange}
            logout={actions.logout}
          />
          <UserButton
            isLoginSuccess={states.isLoginSuccess}
            currentUser={states.currentUser}
            routeChange={actions.routeChange}
          />
          <MenuButton
            currentUser={states.currentUser}
            routeChange={actions.routeChange}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
