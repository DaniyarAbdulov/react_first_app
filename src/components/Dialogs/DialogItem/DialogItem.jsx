import classes from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={classes.dialog + " " + classes.active}>
        <NavLink to={path}className={(navData)=> navData.isActive ? classes.active : classes.dialog}>{props.name} </NavLink>
      </div>
    );
  };

  export default DialogItem;