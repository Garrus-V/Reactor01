import React from 'react';
import MyPosts from './MyPosts/MyPosts';
/*import prof from './Profil.module.css';*/
import Profileinfo from './ProfileInfo/ProfileInfo';




const Profil = () => {

    return (        
        <div>
            <Profileinfo />           
            <MyPosts />
        </div>);
}
export default Profil;
