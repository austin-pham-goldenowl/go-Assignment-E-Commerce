import React from "react";
import Divider from "@material-ui/core/Divider";
import _Button from "../common/_Button";
import _TextInput from "../common/_TextInput";
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
}) => {
  return (
    <div style={{ marginRight: 5, marginTop: 5 }}>
      <center>
        {orders.map(order => {
          return (
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
          );
        })}
      </center>
      <br />
      <Divider />
      <br />
      <_TextInput
        label="Total"
        value={`$${total}`}
        style={{ float: "right", width: 150 }}
      />
      {createOrder}
    </div>
  );
};

export default CartListComp;
