import React from 'react';
import './App.css';
import Header from './web/Header/Header';
import Login from './web/Login/Login';
import Profil from './web/Profil/Profil';
import Menu from './web/Menu/Menu';
import Footer from './web/Footer/Footer';
import Lenta from './web/Lenta/Lenta';



function App ()  {
   
   return (
    <div className ='app-new'>

      <Header />
      <Login />
      <Profil />
      <Menu />  
      <Footer />
      <Lenta />           
    </div>);
  }  

export default App;