import React from "react";
//MUI
import _Button from "../common/_Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import _TextInput from "../common/_TextInput";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
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

const UserDetailsDialogComp = ({ currentUser }) => {
  const classes = useStyles();

  const [edit, setEdit] = React.useState(false);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
              />
            </Grid>
            <Grid item xs={12}>
              <_TextInput
                style={{ display: !edit && "none" }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <_Button
            type={edit && "submit"}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => {
              e.preventDefault();
              setEdit(!edit);
            }}
          >
            {edit ? "Update" : "Edit"}
          </_Button>
        </form>
      </Container>
    </div>
  );
};

export default UserDetailsDialogComp;
