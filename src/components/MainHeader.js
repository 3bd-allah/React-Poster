import React from 'react'
import classes from './MainHeader.module.css'
import { MdMessage } from 'react-icons/md'
import { Link } from 'react-router-dom'
const MainHeader = () => {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage/>
            React Poster
        </h1>
        <p>
            <Link to="/create-post" className={classes.button} >
               <MdMessage size={18} />
               New Post 
            </Link>
        </p>
    </header>
  )
}

export default MainHeader