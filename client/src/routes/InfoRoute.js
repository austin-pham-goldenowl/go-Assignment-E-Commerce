import React from "react";
import { Route, Redirect } from "react-router-dom";
import EditInfo from "../containers/EditInfo";

const InfoRoute = ({ isLoginSuccess, currentUser, getProfile }) => (
  <Route path="/info">
    {isLoginSuccess ? (
      <EditInfo currentUser={currentUser} getProfile={getProfile} />
    ) : (
      <Redirect to="/login" />
    )}
  </Route>
);

export default InfoRoute;
