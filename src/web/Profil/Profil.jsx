import React from 'react';
import logo from '../../images/02.png'
import MyPosts from './MyPosts/MyPosts';
import prof from './Profil.module.css'
import ava from '../../images/01.jpg'




const Profil =() => {
   
    return (
    <div className = {prof.cont}>
     <img src= {logo} alt="картинка"/>
        <div className = {prof.cont}> ava+pof
       <img src={ava} alt="avatar"/>
        </div>
        <MyPosts />

    </div>);
}
    export default Profil;