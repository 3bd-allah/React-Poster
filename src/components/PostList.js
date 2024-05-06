import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <ul className={classes.posts}>
      <li>
        <Post name="Abdullah" content="React.js is awesome!" />
      </li>
      <li>
        <Post name="Ali" content="Checkout the full course" />
      </li>
    </ul>
  );
};

export default PostList;
