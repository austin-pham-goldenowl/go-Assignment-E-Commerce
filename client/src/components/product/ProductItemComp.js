import React, { useState } from "react";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MyButton from "../common/MyButton";
import MyCard from "../common/MyCard";
import MyCardActions from "../common/MyCardActions";
import MyCardContent from "../common/MyCardContent";
import MyCardMedia from "../common/MyCardMedia";
import MyTypography from "../common/MyTypography";
import MyTextInput from "../common/MyTextInput";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));
const ProductItemComp = ({
  isLoginSuccess,
  details,
  detailsButton,
  closeButton,
  title,
  image,
  price,
  addToCart,
  routeChange
}) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState();
  const onClick = () => {
    isLoginSuccess
      ? !isNaN(parseInt(quantity))
        ? quantity > 0 && addToCart(title, quantity, price)
        : addToCart(title, 1, price)
      : routeChange("/login");
  };
  return (
    <div>
      <MyCard className={classes.card}>
        <MyCardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <MyCardContent className={classes.cardContent}>
          <MyTypography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 225,
              display: "inline-block",
              whiteSpace: "nowrap"
            }}
          >
            {title}
          </MyTypography>
          <Grid container>
            <Grid item>{details}</Grid>
            <Grid item xs={8} sm={8} md={8}>
              <MyTextInput
                type="number"
                value={quantity}
                style={{ width: "75%" }}
                onChange={e => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <MyTypography style={{ textAlign: "right", color: "grey" }}>
                ${price}
              </MyTypography>
            </Grid>
          </Grid>
        </MyCardContent>
        <MyCardActions>
          <MyButton
            size="small"
            color="primary"
            style={{ float: "right" }}
            onClick={onClick}
          >
            Add to Cart
          </MyButton>
          {detailsButton}
          {closeButton}
        </MyCardActions>
      </MyCard>
    </div>
  );
};

export default ProductItemComp;
