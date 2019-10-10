import { combineReducers } from "redux";
import Auth from "./Auth";
import orders from "./orders";

const rootReducer = combineReducers({
  Auth,
  orders
});

export default rootReducer;
