import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 8},
        {id: 3, message: "Blbla", likesCount: 9},
        {id: 4, message: "dadad", likesCount: 2},
        {id: 5, message: "ssss", likesCount: 5},
        {id: 6, message: "aaaa", likesCount: 3}
    ];

    let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts