//orders reducer
const orders = (state = [], action) => {
  switch (action.type) {
    //add order reducer
    case "ADD_TO_CART": {
      let found = false;
      for (let i = 0; i < state.length; i++) {
        if (state[i].title === action.title) {
          found = true;
          break;
        }
      }
      return found
        ? state.map(item =>
            item.title === action.title
              ? { ...item, quantity: action.quantity, cost: action.cost }
              : item
          )
        : [
            ...state,
            //return new state
            {
              title: action.title,
              quantity: action.quantity,
              price: action.price,
              cost: action.cost
            }
          ];
    }

    //delete order reducer
    case "DELETE_FROM_CART":
      //return state with completed state reversed
      return state.filter(order => order.title !== action.title);

    default:
      return state;
  }
};

export default orders;
