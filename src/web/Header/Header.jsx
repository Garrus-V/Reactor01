import React from 'react';
import logo from '../../images/01.jpg'
import head from './Header.module.css';


function Header () {
   
    return ( 
    <header className = {head.head}>
      <img src= {logo} alt="картинка"/>
      NuklerCat
       </header>);
    }   
    
    export default Header;
