import React from "react";
// MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import GamepadIcon from "@material-ui/icons/Gamepad";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MyTypography from "../common/MyTypography";
import MyTextInput from "../common/MyTextInput";
import MyButton from "../common/MyButton";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(1, 0, 1)
  }
}));

const UserDetailsDialogComp = ({ currentUser, userUpdate, onChange }) => {
  const classes = useStyles();
  const [edit, setEdit] = React.useState(false);
  return (
    <div>
      <Container className={classes.paper} component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <center>
          <GamepadIcon />
          <MyTypography variant="h5">User Information</MyTypography>
        </center>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MyTextInput
                disabled={!edit}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={currentUser && currentUser.firstName}
                onChange={onChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MyTextInput
                disabled={!edit}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={currentUser && currentUser.lastName}
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <MyTextInput
                disabled={!edit}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={currentUser && currentUser.email}
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <MyButton
            type={edit && "submit"}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={
              edit
                ? e => {
                    e.preventDefault();
                    userUpdate(e);
                    setEdit(!edit);
                  }
                : e => {
                    e.preventDefault();
                    setEdit(!edit);
                  }
            }
          >
            {edit ? "Update" : "Edit"}
          </MyButton>
          <MyButton
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => {
              e.preventDefault();
              setEdit(!edit);
            }}
            style={{ display: !edit && "none" }}
          >
            Cancel
          </MyButton>
        </form>
      </Container>
    </div>
  );
};

export default UserDetailsDialogComp;
