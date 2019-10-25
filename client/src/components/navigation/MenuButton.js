import React from 'react';
import MyMenu from '../common/MyMenu';
import NavButton from './NavButton';

const MenuButton = ({currentUser, routeChange }) => {
    return (
        currentUser &&
        (!currentUser.admin ? (
          <NavButton
            style={{ display: "inline-block" }}
            onClick={() => routeChange("/history")}
          >
            History
          </NavButton>
        ) : (
          <MyMenu
            list={[
              { name: "Product Management", route: "/admin/products" },
              { name: "Category Management", route: "/admin/categories" },
              { name: "Order Management", route: "/admin/orders" }
            ]}
            routeChange={route => routeChange(route)}
          />
        ))
    );
};

export default MenuButton;