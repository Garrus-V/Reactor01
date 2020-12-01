import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

const DialogItem =(props) => {
let path ='/dialogs/'+ props.id;
   return(
    <div className={style.dialog}>
    <NavLink to= {path}>{props.name}</NavLink>
</div>)
}

const Message =(props)  =>{

  return(
    <div className={style.message}>{props.message}</div>)
}

const Dialogs =(props) => {     
    return (        
    <div className={style.dialogs}>
        <div className ={style.dialogItem}>
            <DialogItem name = "Владимир" id = "1"/>
            <DialogItem name = "Александр" id = "2"/>
            <DialogItem name = "Алексей" id = "3"/>
            <DialogItem name = "Анна" id = "4"/>
            <DialogItem name = "Валера" id = "5"/>            
        </div>        
        <div className={style.messages}>
           <Message message ="Привет!"/>
           <Message message ="Отличный костюм"/>
           <Message message ="Где достать масло?"/>
           <Message message ="Посмотри на складе"/>
           <Message message ="Нашел хорошую краску."/>
            
        </div>
     </div>);       
}
    export default Dialogs;