import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import OrderDetailsComp from "../../components/order/OrderDetailsComp";

const OrderManagement = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  React.useEffect(() => {
    const { token } = window.localStorage;
    token &&
      axios
        .get("http://localhost:5000/admin/orders", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        })
        .then(res => {
          setData(res.data.orders);
          setUsers(res.data.users);
        })
        .catch(err => console.log(err));
  }, [data.length]);

  const userLookup = users.reduce(function(arr, cur, i) {
    arr[cur.id] = cur.email;
    return arr;
  }, {});

  const columns = [
    { title: "Order ID", field: "id", editable: "never", filtering: false },
    { title: "User", field: "uid", editable: "never", lookup: userLookup, filtering: false },
    { title: "Date", field: "createdAt", editable: "never", filtering: false, defaultSort: "desc" },
    { title: "Total", field: "total", editable: "never", filtering: false },
    {
      title: "Status",
      field: "status",
      lookup: {
        0: "Order is created",
        1: "Order is being delivering",
        2: "Order is delivered"
      },
      editable: "onUpdate"
    },
    {
      title: "Paid",
      field: "paid",
      lookup: {
        false: "No",
        true: "Yes"
      },
      editable: "onUpdate"
    },
    {
      title: "Dealed",
      field: "dealed",
      lookup: {
        0: "...",
        1: "Accept",
        2: "Reject"
      },
      editable: "onUpdate",
    }
  ];

  const onUpdate = async newData => {
    const { token } = window.localStorage;
    const { id, status, paid, dealed } = newData;
    const putData = {
      id,
      status,
      paid,
      dealed
    };

    if (token) {
      try {
        const res = await axios.put(
          "http://localhost:5000/admin/orders",
          putData,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: token
            }
          }
        );
        setData(res.data.orders);
      } catch (err) {
        return console.log(err);
      }
    }
  };

  return (
    <MaterialTable
      title="Order Management"
      columns={columns}
      data={data}
      editable={{
        onRowUpdate: (newData, oldData) => onUpdate(newData)
      }}
      detailPanel={rowData => {
        return <OrderDetailsComp cart={rowData.cartList} />;
      }}
      options={{
        filtering: true
      }}
      style={{ padding: 5, margin: 20 }}
    />
  );
};

export default OrderManagement;
