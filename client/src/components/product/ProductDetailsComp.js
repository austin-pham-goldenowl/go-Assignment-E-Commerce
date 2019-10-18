import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ProductItemCont from "../../containers/ProductItemCont";
import MyDialog from "../common/MyDialog";
import MyTypography from "../common/MyTypography";
import MyButton from "../common/MyButton";

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
      <MyButton
        size="small"
        color="primary"
        style={{ float: "right" }}
        onClick={handleClickOpen}
      >
        Details
      </MyButton>
      <MyDialog class={classes.dialogPaper} open={open} onClose={handleClose}>
        <Container className={classes.cardGrid} maxWidth="sm">
          <Grid container spacing={4}>
            <Grid>
              <ProductItemCont
                isLoginSuccess={isLoginSuccess}
                title={title}
                image={image}
                price={price}
                closeButton={
                  <MyButton
                    size="small"
                    color="primary"
                    style={{ float: "right" }}
                    onClick={handleClose}
                  >
                    Close
                  </MyButton>
                }
                details={
                  <MyTypography variant="body2">{description}</MyTypography>
                }
                routeChange={routeChange}
              />
            </Grid>
          </Grid>
        </Container>
      </MyDialog>
    </div>
  );
};

export default ProductDetailsComp;
