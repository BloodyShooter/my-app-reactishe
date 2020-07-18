import profileReducer, {addPost, deletePost} from "./profile-reducer";
import ReactDOM from 'react-dom';
import App from "../App";
import React from "react"

it('lenght of posts should be incremented', () => {
    let action = addPost("gvozdetscky.org");

    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 8},
        ]
    };

    let newState = profileReducer(state, action);

    const finalExpectedValue = 3;
    expect(newState.posts.length).toBe(finalExpectedValue);
});

it('message of new post should be correct', () => {
    let action = addPost("gvozdetscky.org");

    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 8},
        ]
    };

    let newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("gvozdetscky.org");
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);

    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 8},
        ]
    };

    let newState = profileReducer(state, action);

    const finalExpectedValue = 1;
    expect(newState.posts.length).toBe(finalExpectedValue);
});