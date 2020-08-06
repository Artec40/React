import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
    debugger
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem image={d.imageURL} name={d.name} id={d.id}/>)

    let messagesElements = state.messages
        .map(m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        debugger
        props.store.dispatch(sendMessageCreator())
    }

    let NewMessageChange = (e) => {
        debugger
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={NewMessageChange}
                                   placeholder='Enter your message'> </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs