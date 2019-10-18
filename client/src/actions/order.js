// actions creators
// add cart item action
export const addToCart = (title, quantity, price) => ({
  type: "ADD_TO_CART",
  title,
  quantity,
  price,
  cost: quantity * price
});

// delete cart item action
export const deleteFromCart = title => ({
  type: "DELETE_FROM_CART",
  title
});

export const deleteCart = () => ({
  type: "DELETE_CART"
});
