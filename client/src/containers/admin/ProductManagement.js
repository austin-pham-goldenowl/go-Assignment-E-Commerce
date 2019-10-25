import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

const ProductManagement = ({ categories, products, reloadData }) => {
  const categoryLookup = categories.reduce(function(arr, cur, i) {
    arr[cur.id] = cur.name;
    return arr;
  }, {});

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Category", field: "categoryId", lookup: categoryLookup },
      { title: "Price ($)", field: "price", type: "numeric" },
      { title: "Description", field: "des" },
      {
        title: "Deleted",
        field: "deleted",
        lookup: { true: "Yes", false: "No" }
      }
    ],
    data: products
  });

  const onAdd = async newData => {
    const { token } = window.localStorage;
    const { name, categoryId, price, des, url } = newData;
    const putData = {
      name,
      categoryId,
      price,
      des,
      url
    };

    if (token) {
      try {
        const res = await axios.post(
          "http://localhost:5000/admin/products",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setState(prev => ({ ...prev, data: res.data.products }));
        reloadData();
      } catch (err) {
        return console.log(err);
      }
    }
  };

  const onUpdate = async newData => {
    const { token } = window.localStorage;
    const { id, name, categoryId, price, des, url, deleted } = newData;
    const putData = {
      id,
      name,
      categoryId,
      price,
      des,
      url,
      deleted
    };

    if (token) {
      try {
        const res = await axios.put(
          "http://localhost:5000/admin/products",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setState(prev => ({ ...prev, data: res.data.products }));
      } catch (err) {
        return console.log(err);
      }

      reloadData();
    }
  };

  const onDelete = async newData => {
    const { token } = window.localStorage;
    const { id, name, categoryId, price, des, url, deleted } = newData;
    const putData = {
      id,
      name,
      categoryId,
      price,
      des,
      url,
      deleted: !deleted
    };

    if (token) {
      try {
        const res = await axios.put(
          "http://localhost:5000/admin/products",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setState(prev => ({ ...prev, data: res.data.products }));
        reloadData();
      } catch (err) {
        return console.log(err);
      }
    }
  };

  return (
    <MaterialTable
      title="Product Management"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: onAdd,
        onRowUpdate: onUpdate,
        onRowDelete: onDelete
      }}
      style={{ padding: 5, margin: 20 }}
    />
  );
};

export default ProductManagement;
