import React from 'react';
import c from './Menu.module.css';




const Menu =()=> {
   
    return (
    <nav className = {c.navi}>
      <dl>  
         <dd className = {c.item}>
           <a href ='/'>Profil</a>
          </dd>
         <dd className = {c.item}>
           <a href ='/'>Messages</a>
           </dd>
         <dd className = {c.item}>
           <a href ='/'>News</a>
          </dd>
          <dd className = {c.item}>
           <a href ='/'>Music</a>
          </dd>
          <dd className = {c.item}>
            <a href ='/'>Settings</a>
          </dd>
     </dl>
</nav>);
    }

export default Menu;