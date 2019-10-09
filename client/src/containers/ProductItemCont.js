import { connect } from "react-redux";
import { addToCart } from "../actions/order";
import ProductItemComp from "../components/product/ProductItemComp";

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (item, quantity, price) =>
      dispatch(addToCart(item, quantity, price))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductItemComp);
