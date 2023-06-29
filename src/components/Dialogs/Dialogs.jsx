import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Michael" id="1" />
        <DialogItem name="Trevor" id="2" />
        <DialogItem name="Lester" id="3" />
      </div>
      <div className={classes.messages}>
        <Message message="Hello Kid!" />
        <Message message="Where am I?" />
        <Message message="Did you do it?" />
      </div>
    </div>
  );
};
export default Dialogs;
