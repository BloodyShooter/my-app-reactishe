import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Andrey'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'},
        {id: 7, message: 'Hi'},
        {id: 8, message: 'Hi'}
    ];

    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messages.map( message => <Message message={message.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;