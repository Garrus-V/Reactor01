import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts =() => {
   
    return (
    <div>   
       <div className = {prof.post}>My post</div>
       <div className = {prof.post}>New post</div>
       <div className = 'posts'>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>add post</button></div>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>);
}
    export default MyPosts;