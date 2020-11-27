import React from 'react';
import c from './Menu.module.css';




const Menu =()=> {
   
    return (
    <nav className = {c.navi}>
      <dl>  
         <dd className = {c.item}>
           <a href ='/profil'>Профиль</a>
          </dd>
         <dd className = {c.item}>
           <a href ='/dialogs'>Сообщения</a>
           </dd>
         <dd className = {c.item}>
           <a href ='/news'>Новости</a>
          </dd>
          <dd className = {c.item}>
           <a href ='/music'>Музыка</a>
          </dd>
          <dd className = {c.item}>
            <a href ='/setting'>Настройки</a>
          </dd>
     </dl>
</nav>);
    }

export default Menu;