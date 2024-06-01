import React from 'react'
import classes from './MainHeader.module.css'
import { MdMessage } from 'react-icons/md'

const MainHeader = ({onCreatePost}) => {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>
            <MdMessage/>
            React Poster
        </h1>
        <p>
            <button className={classes.button} onClick={onCreatePost}>
               <MdMessage size={18} />
               New Post 
            </button>
        </p>
    </header>
  )
}

export default MainHeader