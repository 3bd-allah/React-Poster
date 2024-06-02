import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({isPosting, onStopPosting}) => {
 
  const [posts, setPosts] = useState([])
  
  const newPostHandler = (name, body)=>{
    console.log(posts)
    setPosts(oldPosts => [
      ...oldPosts,
      {
        id:Date.now(),
        author:name,
        content:body
      },
    ])
    console.log(posts)
  } 

  const deletePostHandler = (id)=>{
    const newPosts = posts.filter(post => post.id !== id)
    setPosts(newPosts)
  }

  return (
    <>
      {isPosting &&
        <Modal onClose = {onStopPosting}>
          <NewPost
            onAddPost={newPostHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      }
    {
      posts.length !==0 &&
      <ul className={classes.posts}>
        {posts.map(post => 
          <li key={post.id} >
            <Post
              id={post.id}
              onDelete={deletePostHandler}
              name={post.author}
              content= {post.content}
            />
          </li>
        )}
      </ul> 
    }
    </>
  );
};

export default PostList;
