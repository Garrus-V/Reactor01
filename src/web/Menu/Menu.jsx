import React from 'react';
import c from './Menu.module.css';




const Menu =()=> {
   
    return (
    <nav className = {c.navi}>
      <dl>  
         <dd className = {c.item}>
           <a href ='/'>Профиль</a>
          </dd>
         <dd className = {c.item}>
           <a href ='/'>Сообщения</a>
           </dd>
         <dd className = {c.item}>
           <a href ='/'>Новости</a>
          </dd>
          <dd className = {c.item}>
           <a href ='/'>Музыка</a>
          </dd>
          <dd className = {c.item}>
            <a href ='/'>Настройки</a>
          </dd>
     </dl>
</nav>);
    }

export default Menu;