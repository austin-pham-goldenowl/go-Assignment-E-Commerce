import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function MyMenu({ list, routeChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!!list &&
          list.map(item => (
            <MenuItem onClick={()=>routeChange(item.route)}>{item.name}</MenuItem>
          ))}
        {/* Product Management
        <MenuItem onClick={handleClose}>Category Management</MenuItem>
        <MenuItem onClick={handleClose}>Order Management</MenuItem> */}
      </Menu>
    </div>
  );
}
