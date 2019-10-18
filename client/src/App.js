import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import axios from "axios";
import NavigationBar from "./components/navigation";
import {
  getProfile,
  userLogout,
  userLogin,
  userRegister
} from "./actions/user";
import NavButton from "./components/navigation/NavButton";
import AppRoutes from "./routes";

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
      .then(res =>
        !this.props.isLoginSuccess || !this.props.currentUser.admin ?
        this.setState({
          products: res.data.products.filter(
            product => product.deleted === false
          )
        }) 
        : this.setState({
          products: res.data.products
        }) 
      )
      .catch(err => console.log(err));
    axios
      .get("/categories")
      .then(res => this.setState({ categories: res.data.categories }))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    this.setState({ products: [] });
  }
  render() {
    const {
      isLoginSuccess,
      currentUser,
      userLogin,
      userRegister,
      getProfile
    } = this.props;
    const { category, products, pagination } = this.state;
    const { routeChange, onCategoryClick, onPaginationClick } = this;
    const AppRoutesState = {
      isLoginSuccess,
      currentUser,
      category,
      products,
      pagination,
      itemPerPage: ITEM_PER_PAGE,
      maxPage: MAX_PAGE_SHOWN
    };
    const AppRoutesAction = {
      userLogin,
      userRegister,
      getProfile,
      routeChange,
      onCategoryClick,
      onPaginationClick
    };
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
                Hi, {currentUser && currentUser.firstName}
              </NavButton>
            )
          }
          children3={
            isLoginSuccess && (
              <NavButton
                style={{ display: "inline-block" }}
                onClick={() => this.routeChange("/history")}
              >
                History
              </NavButton>
            )
          }
        />
        <AppRoutes state={AppRoutesState} action={AppRoutesAction} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoginSuccess: !!window.localStorage.token,
  currentUser: state.auth.currentUser
});

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
