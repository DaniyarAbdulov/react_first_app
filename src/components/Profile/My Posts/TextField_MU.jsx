import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  textField: {
    backgroundColor: "white",
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottom: "none",
    },
  },
});

const AddPostField = () => {
  const classes = useStyles();

  return (
    <TextField
      variant="filled"
      color="primary"
      label="Share news with your Friends"
      className={classes.textField}
      size="small"
      style={{ width: "500px" }}
    />
  );
};

export default AddPostField;
