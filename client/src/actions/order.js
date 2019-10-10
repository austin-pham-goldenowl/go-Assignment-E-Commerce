//actions creators

//addTodo action
export const addToCart = (title, quantity, price) => ({
  type: "ADD_TO_CART",
  title,
  quantity,
  price,
  cost: quantity * price
});

//deleteTodo action
export const deleteFromCart = title => ({
  type: "DELETE_FROM_CART",
  title
});
