import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <p className={classes.author}> {props.name} </p>
      <p className={classes.text}> {props.content} </p>
    </div>
  );
};

export default Post;
