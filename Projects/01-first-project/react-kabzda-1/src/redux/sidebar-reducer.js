let initialState = {
    friends: [
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
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer