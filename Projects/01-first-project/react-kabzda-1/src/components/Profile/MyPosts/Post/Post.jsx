import React from 'react'
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg'/>
            post 1
        </div>
    )
}

export default Post