import React from "react";
import ProductComp from "./ProductComp";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const ProductDetailsComp = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="sm">
      <Grid container spacing={4}>
        <Grid>
          <ProductComp />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsComp;
