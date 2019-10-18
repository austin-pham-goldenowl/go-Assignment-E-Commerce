import React, { Component } from "react";
import axios from "axios";
import OrderHistoryComp from "../components/order/OrderHistoryComp";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      cart: {
        id: "",
        createdAt: "",
        cartList: [],
        total: ""
      }
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
        .then(res => this.setState({ orders: res.data.order }))
        .catch(err => console.log(err));
  }

  onOrderItemClick = cart => {
    this.setState({ cart });
  };

  render() {
    return (
      <OrderHistoryComp
        orderList={this.state.orders}
        cart={this.state.cart}
        onMouseOver={this.onOrderItemClick}
      />
    );
  }
}

export default OrderHistory;
