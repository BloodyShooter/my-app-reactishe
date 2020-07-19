import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';


let initialState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: updateObjectInArray(state.users, action.userId, "id", { followed: true}) не рабочий код
                //по какой то причине не добавляются пользователи в массив
                //TODO довести рефактор
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
                //users: updateObjectInArray(state.users, action.userId, "id", { followed: false}) не рабочий код
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        //Интересный момент
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state,
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return {...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            };
        default:
            return state
    }
};

export let followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export let unfollowSuccess = (userId) => {
    return {
        type: UN_FOLLOW,
        userId
    }
};
export let setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export let setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export let setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
};
export let toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
};
export let toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        isFetching, userId
    }
};

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersApi.getUsers(page, pageSize);

        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    }
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersApi.follow.bind(usersApi), followSuccess)
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi), unfollowSuccess)
    }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if  (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
