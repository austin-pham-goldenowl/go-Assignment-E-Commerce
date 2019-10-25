import React from "react";
import HomeRoute from "./HomeRoute";
import AuthRoute from "./AuthRoute";
import RegisterRoute from "./RegisterRoute";
import InfoRoute from "./InfoRoute";
import HistoryRoute from "./HistoryRoute";
import OrderManagementRoute from "./admin/OrderManagementRoute";
import CategoryManagementRoute from "./admin/CategoryManagementRoute";
import ProductManagementRoute from "./admin/ProductManagementRoute";


const index = ({ state, action }) => (
  <React.Fragment>
    <HomeRoute
      isLoginSuccess={state.isLoginSuccess}
      currentUser={state.currentUser}
      products={state.products}
      productList={
        state.category === -1
          ? state.products
          : state.products.filter(
              product => product.categoryId === state.category
            )
      }
      category={state.category}
      itemPerPage={state.itemPerPage}
      maxPage={state.maxPage}
      pagination={state.pagination}
      onPaginationClick={action.onPaginationClick}
      routeChange={action.routeChange}
    />
    <AuthRoute
      isLoginSuccess={state.isLoginSuccess}
      userLogin={action.login}
    />
    <RegisterRoute
      isLoginSuccess={state.isLoginSuccess}
      userRegister={action.userRegister}
    />
    <InfoRoute
      isLoginSuccess={state.isLoginSuccess}
      currentUser={state.currentUser}
      getProfile={action.getProfile}
    />
    <HistoryRoute
      isLoginSuccess={state.isLoginSuccess}
      admin={state.currentUser && state.currentUser.admin}
    />
    <ProductManagementRoute
      currentUser={state.currentUser}
      categories={state.categories}
      products={state.products}
      reloadData={action.reloadProduct}
    />
    <OrderManagementRoute currentUser={state.currentUser} />
    <CategoryManagementRoute
      currentUser={state.currentUser}
      categories={state.categories}
      reloadData={action.reloadCategory}
    />
  </React.Fragment>
);

export default index;
