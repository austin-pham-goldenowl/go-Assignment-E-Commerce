import { connect } from "react-redux";
import React, { Component } from "react";
import axios from "axios";
import { addToCart, deleteFromCart, deleteCart } from "../actions/order";
import CartListComp from "../components/order/CartListComp";
import CreateOrderButton from "../components/order/CreateOrderButton";

class CartList extends Component {
  onSubmit = total => {
    const { token } = window.localStorage;
    return axios
      .post(
        "http://localhost:5000/orders",
        {
          id: this.props.uid,
          cartList: this.props.orders,
          total
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: token
          }
        }
      )
      .then(res => {
        this.props.deleteCart();
      })
      .catch(err => console.log(err));
  };

  render() {
    let total = 0;
    this.props.orders.forEach(order => (total += +order.cost));
    return (
      <CartListComp
        orders={this.props.orders}
        total={total}
        deleteFromCart={this.props.deleteFromCart}
        onIncreaseClick={this.props.onIncreaseClick}
        onDecreaseClick={this.props.onDecreaseClick}
        createOrder={
          <CreateOrderButton
            disabled={this.props.orders.length === 0}
            onClick={() => this.onSubmit(total)}
          />
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch => ({
  deleteFromCart: title => dispatch(deleteFromCart(title)),
  deleteCart: () => dispatch(deleteCart()),
  onIncreaseClick: (title, quantity, price) =>
    dispatch(addToCart(title, quantity + 1, price)),
  onDecreaseClick: (title, quantity, price) =>
    dispatch(addToCart(title, quantity - 1, price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
