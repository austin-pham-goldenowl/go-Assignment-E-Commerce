import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, /*Route, Redirect*/ } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { createBrowserHistory } from "history"

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
