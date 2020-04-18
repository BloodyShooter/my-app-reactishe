const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Andrey'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'},
        {id: 7, message: 'Hi'},
        {id: 8, message: 'Hi'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    newMessageBody: "111"
};

export const dialogsReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.newText
        };
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: 10, message: body}],
        };
    }

    return state;
};

export let updateNewMessageBody = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: text
    }
};

export let sendMessage = () => {
    return {
        type: SEND_MESSAGE
    }
};

export default dialogsReducer;