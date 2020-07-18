import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 8},
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            newPostText: '',
            posts: [...state.posts, newPost]
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    } else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }
    } else if (action.type === DELETE_POST) {
        return {
            ...state,
            posts: state.posts.filter( p => p.id !== action.postId)
        }
    }
    return state;
};

export let addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

export let deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
};

export let setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
};

export let setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export let getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export let getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
};

export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};

export default profileReducer;