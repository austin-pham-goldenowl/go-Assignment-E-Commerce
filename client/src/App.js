import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/navigation";
import ProductListComp from "./components/product/ProductListComp";
import Grid from "@material-ui/core/Grid";
import CartListComp from "./containers/CartListCont";
import { connect } from "react-redux";
import _Typography from "./components/common/_Typography";
import LogInCont from "./containers/LogInCont";
import Register from "./containers/Register";
import axios from "axios";
import {
  getProfile,
  userLogout,
  userLogin,
  userRegister
} from "./actions/user";
import _Button from "./components/common/_Button";
import UserDetailsDialogComp from "./components/user/UserDetailsDialogComp";

const ITEM_PER_PAGE = 6;
const MAX_PAGE_SHOWN = 8;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      category: -1,
      categories: [],
      products: [],
      pagination: {
        pageNum: 0,
        start: 0,
        end: ITEM_PER_PAGE
      }
    };
  }

  onPaginationClick = pageNum => {
    this.setState({
      pagination: {
        pageNum,
        start: pageNum * ITEM_PER_PAGE,
        end: pageNum * ITEM_PER_PAGE + ITEM_PER_PAGE
      }
    });
  };

  routeChange = newPath => {
    this.props.history.push(newPath);
  };

  onCategoryClick = newCategory => {
    this.setState({
      category: newCategory,
      pagination: {
        pageNum: 0,
        start: 0,
        end: ITEM_PER_PAGE
      }
    });
    this.routeChange("/");
  };

  componentDidMount() {
    this.props.getProfile();
    axios
      .get("/products")
      .then(res => this.setState({ products: res.data.products }))
      .catch(err => console.log(err));

    axios
      .get("/categories")
      .then(res => this.setState({ categories: res.data.categories }))
      .catch(err => console.log(err));

    // console.log(this.props.isLoginSuccess);
  }

  render() {
    const { isLoginSuccess } = this.props;
    // console.log(isLoginSuccess);
    // console.log("isLoginSuccess app:", isLoginSuccess);

    return (
      <div>
        <NavigationBar
          categoryList={this.state.categories}
          onDrawerClick={this.onCategoryClick}
          onHomeClick={() => this.onCategoryClick(-1)}
          history={this.props.history}
          children1={
            !isLoginSuccess ? (
              <_Button
                color="inherit"
                onClick={() => this.routeChange("/login")}
              >
                Log In
              </_Button>
            ) : (
              <_Button color="inherit" onClick={this.props.userLogout}>
                Log Out
              </_Button>
            )
          }
          children2={
            !isLoginSuccess ? (
              <_Button
                color="inherit"
                onClick={() => this.routeChange("/register")}
              >
                Register
              </_Button>
            ) : (
              <_Button
                color="inherit"
                onClick={() => this.routeChange("/info")}
              >
                Hi, {isLoginSuccess.firstName}
              </_Button>
            )
          }
        />
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Grid container spacing={3}>
                <Grid item xs={isLoginSuccess ? 8 : 12}>
                  <ProductListComp
                    isLoginSuccess={isLoginSuccess}
                    category={this.state.category}
                    productList={
                      this.state.category === -1
                        ? this.state.products
                        : this.state.products.filter(
                            product =>
                              product.categoryId === this.state.category
                          )
                    }
                    itemPerPage={ITEM_PER_PAGE}
                    maxPage={MAX_PAGE_SHOWN}
                    pagination={this.state.pagination}
                    onPaginationClick={this.onPaginationClick}
                  />
                </Grid>
                <Grid item xs={isLoginSuccess ? 4 : 0}>
                  {isLoginSuccess && <CartListComp />}
                </Grid>
              </Grid>
            )}
          />
          <Route
            path="/login"
            render={() =>
              !isLoginSuccess ? (
                <LogInCont userLogin={user => this.props.userLogin(user)} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/register"
            render={() =>
              !isLoginSuccess ? (
                <Register
                  userRegister={user => this.props.userRegister(user)}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/info"
            render={() =>
              isLoginSuccess ? (
                <UserDetailsDialogComp currentUser={isLoginSuccess} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.logIn.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  userRegister: user => dispatch(userRegister(user)),
  userLogin: user => dispatch(userLogin(user)),
  getProfile: () => dispatch(getProfile()),
  userLogout: () => dispatch(userLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
