import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import React from "react";
import { Link, redirect, Form } from 'react-router-dom'

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            id="body"
            required
            rows={3}
            name="content"
          ></textarea>
        </p>

        <p>
          <label htmlFor="name"> Your Name</label>
          <input
            id="name"
            type="text"
            required
            name="author"
          ></input>
        </p>

        <p className={classes.actions}>
          <Link to="/" type="button" >
            Cancel  
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export async function action({request}){

  const formData = await request.formData();
  console.log(formData)
  const postData = Object.fromEntries(formData);
  console.log(postData)
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/")
}