import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageActionCreation} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsReducer;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageActionCreation(body));
    };

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
};

export default DialogsContainer;