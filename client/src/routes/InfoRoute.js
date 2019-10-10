import React from "react";
import { Route, Redirect } from "react-router-dom";
import EditInfo from "../containers/EditInfo";

const InfoRoute = ({ isLoginSuccess , getProfile}) => {
  return (
    <Route path="/info">
      {isLoginSuccess ? (
        <EditInfo currentUser={isLoginSuccess} getProfile={getProfile}/>
      ) : (
        <Redirect to="/login" />
      )}
    </Route>
  );
};

export default InfoRoute;
