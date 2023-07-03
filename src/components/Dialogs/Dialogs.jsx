import classes from "./Dialogs.module.css";
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

const Message = (props) => {
  return <div className={classes.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Michael" },
    { id: 2, name: "Trevor" },
    { id: 3, name: "Lester" },
  ];

  let messages = [
    { id: 1, message: "Hello Kid!" },
    { id: 2, message: "Where is Lamar?" },
    { id: 3, message: "Did you do it?" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
