import React from 'react'
import classes from './Dialogs.module.css'
import {sendMessageActionCreator, updateNewMessageActionCreation} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsReducer;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageActionCreation(body));
                };

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }

    </StoreContext.Consumer>
};

const superDialogContainer = connect()

export default DialogsContainer;