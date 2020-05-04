import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={classes.postBlock}>
            <h3>my posts</h3>
            <AddMessageFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};

const AddNewPostForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostText"} component={TextArea} validate={[required, maxLength10]} placeholder={"post message"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
);

const AddMessageFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts