import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Menu.module.css';




const Menu = (props) => {

  return (
    <nav className={c.navi}>
      <dl>
        <dd className={c.item}>
        <NavLink to='/profil' activeClassName={c.activeLink}>Профиль </NavLink>
        </dd>
        <dd className={c.item}>
        <NavLink to='/dialogs' activeClassName={c.activeLink}>Сообщения</NavLink>
        </dd>
        <dd className={c.item}>
        <NavLink to='/news' activeClassName={c.activeLink}>Новости</NavLink>
        </dd>
        <dd className={c.item}>
        <NavLink to='/music' activeClassName={c.activeLink}>Музыка</NavLink>
        </dd>
        <dd className={c.item}>
        <NavLink to='/setting' activeClassName={c.activeLink}>Настройки</NavLink>
        </dd>
      </dl>
    </nav>);
}

export default Menu;