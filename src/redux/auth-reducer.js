import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


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
                ...action.payload
            };
        default:
            return state
    }
};

export let setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
};

export const getAuthUserData = () => (dispatch) => {
    return authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email, password, rememberMe) => (dispatch) => {

    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("loginForm", {_error: message}));
            }
        });
};

export const logout = () => (dispatch) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};

export default authReducer;
