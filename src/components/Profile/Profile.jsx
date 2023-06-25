import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://jusan.kz/file-server/filename?dir=slider&filename=mob_1440x570_ru.webp" />
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
