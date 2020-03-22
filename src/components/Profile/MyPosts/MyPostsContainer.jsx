import React from 'react'
import {addPostActionCreator, updateNewPostActionCreation} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostActionCreation(text));
                };

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profileReducer.posts}
                    newPostText={state.profileReducer.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer