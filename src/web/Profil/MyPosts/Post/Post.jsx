import React from 'react';
import post from './Post.module.css';
import ava from '../../../../images/03.jpg';



const Post =(props) => {
      
    return (
        
        <div className = {post.post}>
          <img src={ava} alt ='ava' />
          {props.message} 
                  
        </div>
    );
       
}
    export default Post;