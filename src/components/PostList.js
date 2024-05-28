import React from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";

const PostList = () => {
  return (
 <>
    <NewPost />
    <ul className={classes.posts}>
      <li><Post name="Abdullah" content="React.js is awesome!" /></li>
      <li><Post name="Ali" content="Checkout the full course" /></li>
    </ul>
</>
  );
};

export default PostList;
