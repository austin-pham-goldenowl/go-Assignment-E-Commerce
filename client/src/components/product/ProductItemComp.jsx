import React, { useState } from "react";
//MUI
// import AppBar from "@material-ui/core/AppBar";
import _Button from "../common/_Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import _Card from "../common/_Card";
import _CardActions from "../common/_CardActions";
import _CardContent from "../common/_CardContent";
import _CardMedia from "../common/_CardMedia";
// import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import _Typography from "../common/_Typography";
import { makeStyles } from "@material-ui/core/styles";
import _TextInput from "../common/_TextInput";
import { Grid } from "@material-ui/core";
// import { keys } from "@material-ui/core/styles/createBreakpoints";
// import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  //   cardGrid: {
  //     paddingTop: theme.spacing(8),
  //     paddingBottom: theme.spacing(8)
  //   },
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

  return (
    <div>
      <_Card className={classes.card}>
        <_CardMedia
          className={classes.cardMedia}
          image={image}
          title="Image title"
        />
        <_CardContent className={classes.cardContent}>
          <_Typography
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
          </_Typography>
          <Grid container>
            <Grid item>{details}</Grid>
            <Grid item xs={8} sm={8} md={8}>
              <_TextInput
                type="number"
                value={quantity}
                style={{ width: "75%" }}
                onChange={e => setQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <_Typography style={{ textAlign: "right", color: "grey" }}>
                ${price}
              </_Typography>
            </Grid>
          </Grid>
        </_CardContent>
        <_CardActions>
          <_Button
            size="small"
            color="primary"
            style={{ float: "right" }}
            onClick={() =>
              isLoginSuccess
                ? !isNaN(parseInt(quantity))
                  ? quantity > 0 && addToCart(title, quantity, price)
                  : addToCart(title, 1, price)
                : routeChange("/login")
            }
          >
            Add to Cart
          </_Button>
          {detailsButton}
          {closeButton}
        </_CardActions>
      </_Card>
    </div>
  );
};

export default ProductItemComp;
