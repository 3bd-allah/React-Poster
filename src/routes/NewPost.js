import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom'

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  function submitHandler(e) {
    e.preventDefault();
    // setEnteredBody(e.target[0].value)
    // setEnteredAuthor(e.target[1].value)
    console.log(`Author:${enteredAuthor}`);
    console.log(`Body: ${enteredBody}`);
    onAddPost(enteredAuthor, enteredBody);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            onChange={bodyChangeHandler}
          ></textarea>
        </p>
        <p>
          <label htmlFor="name"> Your Name</label>
          <textarea
            id="name"
            type="text"
            required
            onChange={authorChangeHandler}
          ></textarea>
        </p>
        <p className={classes.actions}>
          <Link to="/" type="button" >
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
};

export default NewPost;
