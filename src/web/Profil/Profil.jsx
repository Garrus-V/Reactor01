import React from 'react';
import logo from '../../images/02.png';
import MyPosts from './MyPosts/MyPosts';
import prof from './Profil.module.css';
/*import ava from '../../images/03.jpg';*/




function Profil (){
   
    return (
    <div  className = {prof.cont}>
        <img src= {logo} alt="картинка"/>
    <div className = {prof.cont}> ava+pof
    <div className = {prof.cont}></div>
        
        <MyPosts />
     </div>
    </div>);
 }
    export default Profil;
 