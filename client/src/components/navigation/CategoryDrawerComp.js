import React from "react";
import MyDrawer from "../common/MyDrawer";

const CategoryDrawerComp = ({ categoryList, onClick }) => (
  <MyDrawer list={categoryList} text="Category" onClick={onClick} />
);

export default CategoryDrawerComp;
