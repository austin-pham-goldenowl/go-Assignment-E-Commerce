import React from "react";
import _Drawer from "../common/_Drawer";

const CategoryDrawerComp = ({ categoryList, onClick }) => {
  return <_Drawer list={categoryList} text="Category" onClick={onClick} />;
};

export default CategoryDrawerComp;
