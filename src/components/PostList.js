import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({isPosting, onStopPosting}) => {
  const [enteredBody, setEnteredBody] = useState("Hello, world!");
  const [enteredAuthor, setEnteredAuthor] = useState("Max");
  const [modalIsVisible, setModalIsVisible] = useState(true);
  
  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting &&
        <Modal onClose = {onStopPosting}>
          <NewPost  
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      }
    
      <ul className={classes.posts}>
        <li>
          <Post name={enteredAuthor} content={enteredBody} />
        </li>
        <li>
          <Post name="Ali" content="Checkout the full course" />
        </li>
        <li>
          <Post name="Ali" content="Checkout the full course" />
        </li>
      </ul>
    </>
  );
};

export default PostList;
