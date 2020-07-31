import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div>
            <div>
                <img src={'https://fullhdwall.com/wp-content/uploads/2018/07/Ocean-Image.jpeg'}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile