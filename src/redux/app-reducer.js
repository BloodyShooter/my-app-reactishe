import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET_USER_DATA';


let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }
};

export let setInitializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
};

export const initializeAPP = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    promise.then(() => {
        dispatch(setInitializedSuccess());
    }).catch(() => {
        //TODO временое решение для gh pages
        console.error("mode for gh-pages")
        dispatch(setInitializedSuccess());
    });
};

export default appReducer;
