import React from 'react';
import prof from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts =()=>{
   
    return (
      <div>
       <div className = {prof.posts}>My post</div>
       <div className = {prof.posts}>New post</div>
        <div className = {prof.posts}>
        <textarea name="" id="" cols="30" rows="7" spellcheck/>        
        <button>Отправить</button>
        
        <button type="reset">Очистить</button>
      </div>
    <div className= {prof.message}>
      <Post message='Привет!!!' />
      <Post message='Доброе время суток!'/>
      <Post message='Как дела?'/>
      <Post message='Надо будет встретиться'/>
    </div>
   </div> );
}
    export default MyPosts;