import React from "react";
import classes from '../My Posts/MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
 
        <button>Add post
          <input></input>
        </button>
      </div>

      <div className={classes.posts}>
       <Post message="Hello world"/>
       <Post message="Hello world"/>
       <Post message="My first app"/>
       <Post message="Where's my God?"/>
       <Post message="Once you're in the Hell. Only the Devil can help you out"/>

      </div>
    
    </div>


  );
};

export default MyPosts;
