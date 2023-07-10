import React from "react";
import classes from "../My Posts/MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElemets = props.posts.map((p) => <Post message={p.message} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            className={classes.textField}
          ></textarea>
        </div>
        <div>
          <button className={classes.button} onClick={addPost}>
            Add post
          </button>
        </div>
      </div>
      <div className={classes.posts}>{postsElemets}</div>
    </div>
  );
};

export default MyPosts;
