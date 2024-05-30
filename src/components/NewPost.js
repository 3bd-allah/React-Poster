import classes from './NewPost.module.css'
import React, { useEffect, useState } from 'react'

const NewPost = () => {

    const[enteredBody, setEnteredBody ] = useState("")
    
    const changeTextHandler = (event)=>{
        setEnteredBody(event.target.value); 
    }

   
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id = "body" required rows={3} onChange={changeTextHandler}></textarea>
        </p>
        <p>
            <label htmlFor="name"> Your Name</label>
            <textarea id = "name" type="text" required></textarea>
        </p>
    </form>
)

}

export default NewPost