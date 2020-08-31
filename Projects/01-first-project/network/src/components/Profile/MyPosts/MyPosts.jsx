import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import userPhoto from '../../../assets/images/user.png'
import Preloader from '../../common/Preloader/Preloader'

const MyPosts = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const image = props.profile.photos.large
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likesCount} image={image || userPhoto}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} placeholder='Post message' name={'newPostText'}
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts