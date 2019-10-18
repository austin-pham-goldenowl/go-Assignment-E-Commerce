import React from "react";
// MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ProductItemComp from "../../containers/ProductItemCont";
import MyPagination from "../common/MyPagination";
import ProductDetailsComp from "./ProductDetailsComp";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));
const ProductListComp = ({
  isLoginSuccess,
  productList,
  itemPerPage,
  maxPage,
  pagination,
  onPaginationClick,
  routeChange
}) => {
  const classes = useStyles();
  const images = [
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper81.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper76.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper72.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper70.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper16.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper65.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper62.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper58.jpg",
    "http://avante.biz/wp-content/uploads/Monster-Hunter-hd-wallpaper/Monster-Hunter-hd-wallpaper52.jpg"
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1}>
            {productList.map((item, index) => {
              const randomImage =
                images[Math.ceil(Math.random() * images.length) - 1];
              return (
                index >= pagination.start &&
                index < pagination.end && (
                  <Grid item key={item.id} xs={12} sm={6} md={4}>
                    <ProductItemComp
                      isLoginSuccess={isLoginSuccess}
                      title={item.name}
                      image={randomImage}
                      price={item.price}
                      detailsButton={
                        <ProductDetailsComp
                          isLoginSuccess={isLoginSuccess}
                          title={item.name}
                          image={randomImage}
                          price={item.price}
                          description={item.des}
                          routeChange={routeChange}
                        />
                      }
                      routeChange={routeChange}
                    />
                  </Grid>
                )
              );
            })}
          </Grid>
          <br />
          <MyPagination
            list={productList}
            itemPerPage={itemPerPage}
            pageNum={pagination.pageNum}
            maxPage={maxPage}
            handleClick={onPaginationClick}
          />
        </Container>
      </main>
    </React.Fragment>
  );
};

export default ProductListComp;
