import React from 'react';
import logo from '../../images/04.png'
import head from './Header.module.css';


const Header =()=> {
   
    return ( 
    <header className = {head.head}>
      <img src= {logo} alt="картинка"/>
      <text>Atom Cats</text>       
      </header>);
    }   
    
    export default Header;
