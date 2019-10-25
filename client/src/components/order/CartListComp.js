import React from "react";
import Divider from "@material-ui/core/Divider";
import MyTextInput from "../common/MyTextInput";
import CartItemComp from "./CartItemComp";
import CartItemNumberComp from "./CartItemNumberComp";
import CartItemRemoveComp from "./CartItemRemoveComp";

const CartListComp = ({
  orders,
  total,
  deleteFromCart,
  onIncreaseClick,
  onDecreaseClick,
  createOrder
}) => (
  <div style={{ margin: 5 }}>
    <center>
      {orders.map(order => (
        <div>
          <CartItemComp
            title={order.title}
            cartItemNumber={
              <CartItemNumberComp
                quantity={order.quantity}
                onIncreaseClick={() =>
                  onIncreaseClick(order.title, order.quantity, order.price)
                }
                onDecreaseClick={() =>
                  onDecreaseClick(order.title, order.quantity, order.price)
                }
              />
            }
            cartItemRemove={
              <CartItemRemoveComp
                onRemoveClick={() => deleteFromCart(order.title)}
              />
            }
          />
          <Divider />
        </div>
      ))}
    </center>
    <br />
    <Divider />
    <br />
    <MyTextInput
      label="Total"
      value={`$${total}`}
      style={{ float: "right", width: 150 }}
    />
    {createOrder}
  </div>
);

export default CartListComp;
