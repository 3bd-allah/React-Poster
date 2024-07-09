import React from "react";
import classes from "./Post.module.css";
import  {Link } from "react-router-dom";


const Post = ({ name, content, onDelete, id }) => {
  // const deleteHandler = ()=>{
  //   onDelete(id);
  // }

  

  return (
    <div className={classes.post}>
        <Link to={id}>
          <p className={classes.author}> {name} </p>
          <p className={classes.text}> {content} </p>
        </Link>
        {/* <p className={classes.actions}>
          <button onClick={()=> onDelete(id)}>Delete</button>
        </p> */}
      </div>
  );
};

export default Post;
