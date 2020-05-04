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
    ]
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            debugger
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: body}],
            };
        default:
            return state
    }
};

export let sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;