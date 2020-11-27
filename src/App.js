import React from 'react';
import './App.css';
import Header from './web/Header/Header';
import Login from './web/Login/Login';
import Profil from './web/Profil/Profil';
import Dialogs from './web/Dialogs/Dialogs';
import Menu from './web/Menu/Menu';
import Footer from './web/Footer/Footer';
import Lenta from './web/Lenta/Lenta';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './web/News/News';
import Music from './web/Music/Music';
import Setting from './web/Setting/Setting';




function App (props)  {
   
   return (
     <BrowserRouter>
    <div className ='app-new'>
      <Header />
      <Login />
      <div className="app-new-cont">
        <Route path ='/dialogs'component ={Dialogs}/>
        <Route path ='/profil' component ={Profil }/>
        <Route path ='/news' component ={News }/>
        <Route path ='/music' component ={Music}/>
        <Route path ='/settig' component ={Setting}/>
      </div>
      <Menu />  
      <Footer />
      <Lenta />
    </div>
    </BrowserRouter>);
  }  

export default App;