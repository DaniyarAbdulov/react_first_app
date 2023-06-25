import React from "react";
import classes from '../Post/Post.module.css'


const Post = () => {
  return (
    <div className={classes.item}>
      <img src="https://www.vhv.rs/dpng/d/131-1310233_franklin-clinton-franklin-do-gta-5-hd-png.png" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>

  );
};

export default Post;
