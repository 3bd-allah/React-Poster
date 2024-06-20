import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

const PostList = ({isPosting, onStopPosting}) => {

  const [posts, setPosts] = useState([])
  useEffect(()=>{
    
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts"); 
      const resData = await response.json();
      setPosts(resData.posts)
    }
    fetchPosts();

    // ----------------- old way ------------------- 
    // fetch("http://localhost:8080/posts")
    // .then(response => response.json())
    // .then(data => setPosts(data.posts))

  },[])
  
  
  const newPostHandler = (name, body)=>{
    console.log(posts)
    const postData = {
        id:Date.now(),
        author:name,
        content:body
    }
    fetch("http://localhost:8080/posts",
      {
        method:'POST',
        body:JSON.stringify(postData),
        headers:{
          "Content-Type":"application/json"
        }
      }
    )

    setPosts(oldPosts => [postData, ...oldPosts])
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
      posts.length !==0 ?
      <ul className={classes.posts}>
        {posts.map(post => 
          <li>
            <Post
              key={post.id}
              id={post.id}
              onDelete={deletePostHandler}
              name={post.author}
              content= {post.content}
            />
          </li>
        )}
      </ul>
      : <h2 style={{textAlign:"center"}}>Loading...</h2>
    }
    </>
  );
};

export default PostList;
