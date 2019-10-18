import React from "react";
import HomeRoute from "./HomeRoute";
import AuthRoute from "./AuthRoute";
import RegisterRoute from "./RegisterRoute";
import InfoRoute from "./InfoRoute";
import HistoryRoute from "./HistoryRoute";

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
      userLogin={action.userLogin}
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
    <HistoryRoute isLoginSuccess={state.isLoginSuccess} />
  </React.Fragment>
);

export default index;
