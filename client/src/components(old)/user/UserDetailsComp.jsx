import React from "react";
//MUI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const UserDetailsComp = () => {
  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User Details
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="filled"
                  disabled
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue="Hello World"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="filled"
                  disabled
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  defaultValue="Hello World"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  disabled
                  fullWidth
                  id="email"
                  label="Email Address"
                  defaultValue="Hello World"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  disabled
                  fullWidth
                  name="password"
                  label="Password"
                  defaultValue="Hello World"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="default"
                className={classes.submit}
              >
                Update Information
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UserDetailsComp;
