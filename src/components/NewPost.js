import classes from './NewPost.module.css'
import React from 'react'

const NewPost = (props) => {
   
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id = "body" required rows={3} onChange={props.onBodyChange}></textarea>
        </p>
        <p>
            <label htmlFor="name"> Your Name</label>
            <textarea id = "name" type="text" required onChange={props.onAuthorChange}></textarea>
        </p>
    </form>
)   

}

export default NewPost