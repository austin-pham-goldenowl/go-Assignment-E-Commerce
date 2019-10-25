import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

const CategoryManagement = ({ categories, reloadData }) => {
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Deleted",
        field: "deleted",
        lookup: { true: "Yes", false: "No" }
      }
    ],
    data: categories
  });

  const onAdd = async newData => {
    const { token } = window.localStorage;
    const { name } = newData;
    const putData = { name };

    if (token) {
      try {
        const res = await axios.post(
          "http://localhost:5000/admin/categories",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setState(prev => ({ ...prev, data: res.data.categories }));
        reloadData();
      } catch (err) {
        return console.log(err);
      }
    }
  };

  const onUpdate = async newData => {
    const { token } = window.localStorage;
    const { id, name, deleted } = newData;
    const putData = {
      id,
      name,
      deleted
    };

    if (token) {
      try {
        const res = await axios.put(
          "http://localhost:5000/admin/categories",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setState(prev => ({ ...prev, data: res.data.categories }));
      } catch (err) {
        alert("Delete not allowed!");
        return;
      }
      reloadData();
    }
  };

  const onDelete = async newData => {
    const { token } = window.localStorage;
    const { id, name, deleted } = newData;
    const putData = {
      id,
      name,
      deleted: !deleted
    };

    if (token) {
      // try {
        
      // } catch (err) {
      //   console.log('err: ', err);
      //   alert("Delete not allowed!");
      //   return;
      // }

      const res = await axios.put(
        "http://localhost:5000/admin/categories",
        putData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        }
      );

      if ((res.data || {}).error) {
        alert(res.data.message);
        return;
      }
      setState(prev => ({ ...prev, data: res.data.categories }));
      reloadData();
    }
  };

  return (
    <div>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: onAdd,
          onRowUpdate: onUpdate,
          onRowDelete: onDelete
        }}
        style={{ padding: 5, margin: 20 }}
      />
    </div>
  );
};

export default CategoryManagement;
