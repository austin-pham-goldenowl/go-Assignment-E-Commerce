import React from 'react';
import NavButton from './NavButton';

const AuthButton = ({isLoginSuccess, routeChange, logout}) => {
    return (
        !isLoginSuccess ? (
            <NavButton onClick={() => routeChange("/login")}>
              Log In
            </NavButton>
          ) : (
            <NavButton onClick={() => logout()}>Log Out</NavButton>
          )    );
};

export default AuthButton;