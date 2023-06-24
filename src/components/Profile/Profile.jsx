import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://jusan.kz/file-server/filename?dir=slider&filename=mob_1440x570_ru.webp" />
      </div>
      <div>
        ava + desc
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post1
          </div> 
          <div className={classes.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
