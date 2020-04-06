const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dimitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, followed: true, fullName: 'Sasha', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russian'} },
        {id: 3, followed: false, fullName: 'Andrey', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        //Интересный момент
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        //Интересный момент
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case setUsersAC:
            return {...state, users: [...state.users, ...action.users] };
        default:
            return state
    }
};

export let followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export let unFollowAC = (userId) => {
    return {
        type: UN_FOLLOW,
        userId
    }
};
export let setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
};

export default usersReducer;
