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
        author:name,
        content:body
      },
    ])
    console.log(posts)
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
          <li>
            <Post
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
