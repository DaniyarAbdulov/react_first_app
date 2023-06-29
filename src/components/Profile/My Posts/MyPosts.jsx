import React from "react";
import classes from "../My Posts/MyPosts.module.css";
import Post from "./Post/Post";
import AddPostField from "./TextField_MU";
import AddPostButton from "./Button_TextField_MU";

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostField />
        <AddPostButton />
      </div>
      <div className={classes.posts}>
        <Post message="Hello world" />
        <Post message="Hello world" />
        <Post message="My first app" />
        <Post message="Where's my God?" />
        <Post message="Once you're in the Hell. Only the Devil can help you out" />
      </div>
    </div>
  );
};

export default MyPosts;
