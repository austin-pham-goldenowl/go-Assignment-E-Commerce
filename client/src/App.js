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

  onHomeClick = () => {
    this.routeChange("/");
    this.onCategoryClick(-1);
  };

  login = user => {
    return new Promise(resolve => {
      resolve();
      this.props.userLogin(user);
    })
      .then(
        axios
          .get("/products")
          .then(
            res =>
              this.props.currentUser.admin
                ? this.setState({
                    products: res.data.products
                  })
                : this.setState({
                    products: res.data.products.filter(
                      product => product.deleted === false
                    )
                  }),
            this.onPaginationClick(0)
          )
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  };

  logout = () => {
    return new Promise(resolve => {
      resolve();
      this.props.userLogout();
    })
      .then(
        axios
          .get("/products")
          .then(
            res =>
              this.setState({
                products: res.data.products.filter(
                  product => product.deleted === false
                )
              }),
            this.onPaginationClick(0)
          )
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.props.getProfile();
    axios
      .get("/products")
      .then(res =>
        this.props.currentUser
          ? this.props.currentUser.admin
            ? this.setState({
                products: res.data.products
              })
            : this.setState({
                products: res.data.products.filter(
                  product => product.deleted === false
                )
              })
          : this.setState({
              products: res.data.products.filter(
                product => product.deleted === false
              )
            })
      )
      .catch(err => console.log(err));
    axios
      .get("/categories")
      .then(res => this.setState({ categories: res.data.categories }))
      .catch(err => console.log(err));
  }

  reloadProduct = () => {
    axios
      .get("/products")
      .then(res =>
        this.props.currentUser
          ? this.props.currentUser.admin
            ? this.setState({
                products: res.data.products
              })
            : this.setState({
                products: res.data.products.filter(
                  product => product.deleted === false
                )
              })
          : this.setState({
              products: res.data.products.filter(
                product => product.deleted === false
              )
            })
      )
      .catch(err => console.log(err));
  };

  reloadCategory = () => {
    axios
      .get("/categories")
      .then(res => this.setState({ categories: res.data.categories }))
      .then(console.log(`state`, this.state.categories))
      .catch(err => console.log(err));
  };

  componentWillUnmount() {
    this.setState({ products: [] });
  }

  render() {
    const {
      isLoginSuccess,
      currentUser,
      userRegister,
      getProfile
    } = this.props;

    const { category, categories, products, pagination } = this.state;

    const {
      login,
      logout,
      routeChange,
      onCategoryClick,
      onHomeClick,
      onPaginationClick,
      reloadProduct,
      reloadCategory
    } = this;

    const AppStates = {
      isLoginSuccess,
      currentUser,
      category,
      categories,
      products,
      pagination,
      itemPerPage: ITEM_PER_PAGE,
      maxPage: MAX_PAGE_SHOWN
    };

    const AppActions = {
      login,
      logout,
      userRegister,
      getProfile,
      routeChange,
      onCategoryClick,
      onHomeClick,
      onPaginationClick,
      reloadProduct,
      reloadCategory
    };

    return (
      <div>
        <NavigationBar states={AppStates} actions={AppActions} />
        <AppRoutes state={AppStates} action={AppActions} />
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
