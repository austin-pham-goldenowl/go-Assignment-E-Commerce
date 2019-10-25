import React, { Component } from "react";
import axios from "axios";
import OrderListComp from "../components/order/OrderListComp";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      cart: {
        id: "",
        createdAt: "",
        cartList: [],
        total: ""
      },
      columns: [
        { title: "Order ID", field: "id", editable: "never" },
        {
          title: "Date",
          field: "createdAt",
          editable: "never",
          defaultSort: "desc"
        },
        {
          title: "Total",
          field: "total",
          editable: "never",
          customFilterAndSearch: (term, rowData) => term <= rowData.total
        },
        {
          title: "Status",
          field: "status",
          lookup: {
            0: "Order is created",
            1: "Order is being delivering",
            2: "Order is delivered"
          },
          editable: "never"
        },
        {
          title: "Paid",
          field: "paid",
          lookup: {
            false: "No",
            true: "Yes"
          },
          editable: "never"
        },
        {
          title: "Dealed",
          field: "dealed",
          lookup: {
            0: "...",
            1: "Accept",
            2: "Reject"
          },
          editable: "never"
        }
      ]
    };
  }

  componentDidMount() {
    const { token } = window.localStorage;
    token &&
      axios
        .get("http://localhost:5000/orders", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        })
        .then(res => this.setState({ orders: res.data.orders }))
        .catch(err => console.log(err));
  }

  onOrderItemClick = cart => {
    this.setState({ cart });
  };

  render() {
    return (
      <OrderListComp
        columns={this.state.columns}
        orderList={this.state.orders}
      />
    );
  }
}

export default History;
