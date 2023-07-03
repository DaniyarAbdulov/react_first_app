import React from "react";
import classes from "../My Posts/MyPosts.module.css";
import Post from "./Post/Post";
import AddPostField from "./TextField_MU";
import AddPostButton from "./Button_TextField_MU";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hello world" },
    { id: 2, message: "My first app" },
    { id: 3, message: "Where's my God?" },
    {
      id: 4,
      message: "Once you're in the Hell. Only the Devil can help you out}",
    },
  ];
  let postsElemets = posts.map((p) => <Post message={p.message} />);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostField />
        <AddPostButton />
      </div>
      <div className={classes.posts}>{postsElemets}</div>
    </div>
  );
};

export default MyPosts;
