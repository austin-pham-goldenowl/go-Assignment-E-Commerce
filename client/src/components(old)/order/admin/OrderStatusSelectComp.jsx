import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

import React from "react";

const OrderStatusSelectComp = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    status: "",
    name: "hai"
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={values.status}
          onChange={handleChange}
          inputProps={{
            name: "status",
            id: "status-simple"
          }}
        >
          <MenuItem value={'New'}>New</MenuItem>
          <MenuItem value={'Delivering'}>Delivering</MenuItem>
          <MenuItem value={'Delivered'}>Delivered</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderStatusSelectComp;
