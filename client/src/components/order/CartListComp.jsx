import React from "react";
import Divider from "@material-ui/core/Divider";
import _Button from "../common/_Button";
import _TextInput from "../common/_TextInput";
import CartItemComp from "./CartItemComp";
// import { Box } from "@material-ui/core";

const CartListComp = ({ orders, deleteFromCart, addToCart }) => {
  // const list = [
  //   "Monster Hunter: World",
  //   "Resident Evil 5",
  //   "Resident Evil 6",
  //   "Street Fighter II",
  //   "Resident Evil 7: biohazard",
  //   "Resident Evil 2",
  //   "Monster Hunter Freedom 3",
  //   "Monster Hunter Generations"
  // ];

  let total = 0;
  return (
    <div style={{ marginRight: 5, marginTop: 5 }}>
      <center>
        {orders
        // .reverse()
        .map(order => {
          total += Number(order.cost);
          return (
            <div>
              <CartItemComp
                title={order.title}
                quantity={order.quantity}
                onRemoveClick={() => deleteFromCart(order.id)}
                onIncreaseClick={() =>
                  addToCart(order.title, +order.quantity + 1, order.price)
                }
                onDecreaseClick={() =>
                  addToCart(order.title, +order.quantity - 1, order.price)
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
      <_Button fullWidth variant="contained" color="primary">
        Check Out
      </_Button>
    </div>
  );
};

export default CartListComp;
