import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case TOGGLE_IS_FETCHING:
            return {...state,
                isFetching: action.isFetching
            };
        default:
            return state
    }
};

export let setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
};

export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};

export const getAuthUserData = () => (dispatch) => {
    authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
};

export default authReducer;
