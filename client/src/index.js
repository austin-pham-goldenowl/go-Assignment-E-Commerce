import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LogInCont from "./containers/LogInCont";
import Register from "./containers/Register";
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from "react";
// import ReactDOM from "react-dom";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import Pagination from "material-ui-flat-pagination";

// const theme = createMuiTheme();

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { offset: 0 };
//   }

//   handleClick(offset) {
//     this.setState({ offset });
//   }

//   render() {
//     return (
//       <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <Pagination
//           limit={5}
//           offset={this.state.offset}
//           total={25}
//           onClick={(e, offset) => this.handleClick(offset)}
//         />
//       </MuiThemeProvider>
//     );
//   }
// }

// ReactDOM.render(<Example />, document.getElementById("root"));
