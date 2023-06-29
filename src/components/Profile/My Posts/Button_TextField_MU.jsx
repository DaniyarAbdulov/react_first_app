import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    color: "#000",
    borderRadius: "4px",
    padding: "6px 12px",
    border: "1px solid #e1e1e1",
    "&:hover": {
      backgroundColor: "#000",
      color: "white",
    },
    marginLeft: "365px",
  },
});

const AddPostButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button}>Add new Post!</Button>
    </div>
  );
};

export default AddPostButton;
