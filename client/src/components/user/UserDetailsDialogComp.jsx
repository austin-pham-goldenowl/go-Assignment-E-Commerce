import React from "react";
//MUI
import _Button from "../common/_Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import _TextInput from "../common/_TextInput";
import Grid from "@material-ui/core/Grid";
import GamepadIcon from "@material-ui/icons/Gamepad";
import _Typography from "../common/_Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import _Dialog from "../common/_Dialog";
import _DialogTitle from "../common/_DialogTitle";
import _DialogContent from "../common/_DialogContent";
import _DialogContentText from "../common/_DialogContentText";

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
          <_Typography variant="h5">User Information</_Typography>
        </center>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <_TextInput
                disabled={!edit}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={currentUser.firstName}
                onChange={onChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <_TextInput
                disabled={!edit}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={currentUser.lastName}
                name="lastName"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <_TextInput
                disabled={!edit}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={currentUser.email}
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <_Button
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
          </_Button>
          <_Button
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
          </_Button>
        </form>
      </Container>
    </div>
  );
};

export default UserDetailsDialogComp;
