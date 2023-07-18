import React from "react";
import classes from "../My Posts/MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state"



const MyPosts = (props) => {
  let postsElemets = props.posts.map((p) => <Post message={p.message} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            className={classes.textField}
          />
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
