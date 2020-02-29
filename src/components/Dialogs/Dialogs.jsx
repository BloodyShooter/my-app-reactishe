import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ];

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

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

    let messagesElements = messages.map( message => <Message message={message.message}/>)

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