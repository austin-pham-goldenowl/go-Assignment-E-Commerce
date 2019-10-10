import React from "react";
import ProductItemCont from "../../containers/ProductItemCont";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import _Dialog from "../common/_Dialog";
import _Typography from "../common/_Typography";
import _Button from "../common/_Button";

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    minHeight: "110vh",
    maxHeight: "110vh"
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const ProductDetailsComp = ({
  isLoginSuccess,
  title,
  image,
  price,
  description,
  routeChange
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <_Button
        size="small"
        color="primary"
        style={{ float: "right" }}
        onClick={handleClickOpen}
      >
        Details
      </_Button>
      <_Dialog class={classes.dialogPaper} open={open} onClose={handleClose}>
        <Container className={classes.cardGrid} maxWidth="sm">
          <Grid container spacing={4}>
            <Grid>
              <ProductItemCont
                isLoginSuccess={isLoginSuccess}
                title={title}
                image={image}
                price={price}
                closeButton={
                  <_Button
                    size="small"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={handleClose}
                  >
                    Close
                  </_Button>
                }
                details={
                  <_Typography variant="body2">{description}</_Typography>
                }
                routeChange={routeChange}
              />
            </Grid>
          </Grid>
        </Container>
      </_Dialog>
    </div>
  );
};

export default ProductDetailsComp;
