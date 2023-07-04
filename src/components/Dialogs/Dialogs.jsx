import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

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
