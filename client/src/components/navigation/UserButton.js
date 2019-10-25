import React from 'react';
import NavButton from './NavButton';

const UserButton = ({isLoginSuccess, currentUser, routeChange}) => {
    return (
        !isLoginSuccess ? 
        <NavButton onClick={() => routeChange("/register")}>
          Register
        </NavButton>
       : 
        <NavButton onClick={() => this.routeChange("/info")}>
          Hi, {currentUser && currentUser.firstName}
        </NavButton>
    );
};

export default UserButton;