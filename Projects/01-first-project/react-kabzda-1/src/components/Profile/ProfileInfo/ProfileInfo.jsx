import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://fullhdwall.com/wp-content/uploads/2018/07/Ocean-Image.jpeg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo