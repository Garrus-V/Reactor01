import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts =()=>{
   
    return (
      <div>
       <div className = {prof.posts}>My post</div>
       <div className = {prof.posts}>New post</div>
        <div className = {prof.posts}>
        <textarea name="" id="" cols="30" rows="7" />        
        <button>add post</button>
        <button type="reset">Очистить</button>
        
        </div>
      <Post message='Start' />
      <Post message='middle'/>
      <Post message='End'/>
          
   </div> );
}
    export default MyPosts;