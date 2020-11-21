import React from 'react';
import logo from '../../images/02.png';
import MyPosts from './MyPosts/MyPosts';
import prof from './Profil.module.css';
/*import ava from '../../images/03.jpg';*/
import avatar from '../../images/04.jpg';




const Profil = ()=>{
   
    return (
    <div  className = {prof.logo}>
        <img src= {logo} alt="картинка"/>        
    <div className = {prof.cont}> ava+pof
         <img src= {avatar} alt="картинка"/>
    <div className = {prof.cont}></div>
        
        <MyPosts />
    </div>
    </div>);
 }
    export default Profil;
 