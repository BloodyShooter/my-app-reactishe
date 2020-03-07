import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPostCallBack = () => {
        props.dispatch({ type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: newPostElement.current.value
        };
        props.dispatch(action);
    };

    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/></div>
                <div>
                    <button onClick={addPostCallBack}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts