import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/navigation";
import { connect } from "react-redux";
import _Typography from "./components/common/_Typography";
import axios from "axios";
import {
  getProfile,
  userLogout,
  userLogin,
  userRegister
} from "./actions/user";
import NavButton from "./components/navigation/NavButton";
import HomeRoute from "./routes/HomeRoute";
import AuthRoute from "./routes/AuthRoute";
import RegisterRoute from "./routes/RegisterRoute";
import InfoRoute from "./routes/InfoRoute";

const ITEM_PER_PAGE = 6;
const MAX_PAGE_SHOWN = 8;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    const { isLoginSuccess } = this.props;

    return (
      <div>
        <NavigationBar
          categoryList={this.state.categories}
          onDrawerClick={this.onCategoryClick}
          onHomeClick={() => this.onCategoryClick(-1)}
          history={this.props.history}
          children1={
            !isLoginSuccess ? (
              <NavButton onClick={() => this.routeChange("/login")}>
                Log In
              </NavButton>
            ) : (
              <NavButton
                onClick={() => {
                  this.props.userLogout();
                  this.routeChange("/");
                }}
              >
                Log Out
              </NavButton>
            )
          }
          children2={
            !isLoginSuccess ? (
              <NavButton onClick={() => this.routeChange("/register")}>
                Register
              </NavButton>
            ) : (
              <NavButton onClick={() => this.routeChange("/info")}>
                Hi, {isLoginSuccess.firstName}
              </NavButton>
            )
          }
        />
        <HomeRoute
          isLoginSuccess={isLoginSuccess}
          products={this.state.products}
          productList={
            this.state.category === -1
              ? this.state.products
              : this.state.products.filter(
                  product => product.categoryId === this.state.category
                )
          }
          category={this.state.category}
          itemPerPage={ITEM_PER_PAGE}
          maxPage={MAX_PAGE_SHOWN}
          pagination={this.state.pagination}
          onPaginationClick={this.onPaginationClick}
          routeChange={this.routeChange}
        />
        <AuthRoute
          isLoginSuccess={isLoginSuccess}
          userLogin={this.props.userLogin}
        />
        <RegisterRoute
          isLoginSuccess={isLoginSuccess}
          userRegister={this.props.userRegister}
        />
        <InfoRoute
          isLoginSuccess={isLoginSuccess}
          getProfile={this.props.getProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.Auth.currentUser
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
