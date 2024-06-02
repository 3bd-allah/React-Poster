import React from "react";
import classes from "./Post.module.css";

const Post = ({name, content, onDelete, id}) => {

  const deleteHandler = ()=>{
    onDelete(id);
  }

  return (
    <div className={classes.post}>
      <p className={classes.author}> {name} </p>
      <p className={classes.text}> {content} </p>
      <p className={classes.actions}>
        <button   onClick={deleteHandler}>Delete</button>
      </p>
    </div>
  );
};

export default Post;
