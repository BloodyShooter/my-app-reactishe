import React from 'react'
import {addPostActionCreator, updateNewPostActionCreation} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreation(text));
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profileReducer.posts}
            newPostText={state.profileReducer.newPostText} />
    )
};

export default MyPostsContainer