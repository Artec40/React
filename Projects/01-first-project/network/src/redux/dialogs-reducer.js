const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            imageURL: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600'
        },
        {
            id: 2,
            name: 'Andrew',
            imageURL: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
        },
        {id: 3, name: 'Sveta', imageURL: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
        {id: 4, name: 'Sasha', imageURL: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
        {id: 5, name: 'Viktor', imageURL: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
        {id: 6, name: 'Valera', imageURL: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_10.jpg'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer