import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://jusan.kz/file-server/filename?dir=slider&filename=mob_1440x570_ru.webp" />
      </div>
      <div className={classes.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;