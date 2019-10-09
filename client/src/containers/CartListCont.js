import { connect } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/order";
import CartListComp from "../components/order/CartListComp";

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch => ({
  deleteFromCart: id => dispatch(deleteFromCart(id)),
  addToCart: (title, quantity, price) => dispatch(addToCart(title, quantity, price))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartListComp);
