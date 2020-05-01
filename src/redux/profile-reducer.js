import {usersApi} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 8},
    ],
    newPostText: 'gvozdetscky',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
        }
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    }
    return state;
};

export let addPost = () => {
    return {
        type: ADD_POST
    }
};

export let updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export let getUserProfile = (userId) => (dispatch) => {
    usersApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export default profileReducer;