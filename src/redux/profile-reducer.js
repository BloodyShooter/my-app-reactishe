const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 8},
    ],
    newPostText: 'gvozdetscky'
};

const profileReducer = (state = initialState, action) => {

    let stateCopy = {...state};

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: stateCopy.newPostText,
            likesCount: 0
        };
        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        stateCopy.newPostText = action.newText;
    }
    return stateCopy;
};

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export let updateNewPostActionCreation = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;