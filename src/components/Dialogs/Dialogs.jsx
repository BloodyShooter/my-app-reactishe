import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                              id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}
                                                                              key={message.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message!!!"} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;