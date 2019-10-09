import { combineReducers } from "redux";
import logIn from "./logIn";
import orders from "./orders";

const rootReducer = combineReducers({
  logIn,
  orders
});

export default rootReducer;
