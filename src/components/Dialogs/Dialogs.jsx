import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageActionCreation} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map( message => <Message message={message.message}/>);

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageActionCreation(body));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                <textarea value={props.dialogsPage.newMessageBody}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message!!!' />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;