import React from 'react';
import prof from './ProfileInfo.module.css';
import avatar from '../../../images/04.jpg';


const ProfileInfo = (props) => {

    return (
        <div className={prof.av}>
            <div>
                <img src={avatar} alt="картинка" />
                <div className={prof.info}>
                    prof
                </div>
            </div>
        </div>);
}
export default ProfileInfo;