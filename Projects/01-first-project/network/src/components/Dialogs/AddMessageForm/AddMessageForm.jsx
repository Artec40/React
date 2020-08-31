import React from 'react'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Field, reduxForm } from 'redux-form'
import s from './AddMessageForm.module.css'

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)