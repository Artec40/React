import { rerenderEntireTree } from '../render'

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 4, message: 'Yo'},
        ],
        dialogs: [
            {
                id: 1,
                name: 'Dimych',
                imageURL: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600'
            },
            {id: 2, name: 'Andrew', imageURL: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
            {id: 3, name: 'Sveta', imageURL: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
            {id: 4, name: 'Sasha', imageURL: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg'},
            {id: 5, name: 'Viktor', imageURL: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
            {id: 6, name: 'Valera', imageURL: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_10.jpg'},
        ]
    },
    navbar: {
        friends: [
            {
                id: 1,
                name: 'Dimych',
                imageURL: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600'
            },
            {id: 2, name: 'Andrew', imageURL: 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'},
            {id: 3, name: 'Sveta', imageURL: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {id: 5, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}


export default state