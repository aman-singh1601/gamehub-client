import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_ALL_USERS_SUCCESS,
    GET_FOLLOWING_USERS_SUCCESS,
    PLAYER_UNFOLLOWED,
    PLAYER_FOLLOWED
} from "./actionTypes";


interface initialStateType {
    allUsers: any,
    followingUsers: any
    error: null | string,
    success: null | string,
}

const INIT: initialStateType = {
    allUsers: [],
    followingUsers: [],
    error: null,
    success: null,
}

interface actionType {
    type: string,
    payload: string
}

const auth = (state = INIT, action: any) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            state = {
                ...state,
                success: action.payload
            }
            break;
        case USER_LOGIN_FAIL:
            state = {
                ...state,
                error: action.payload
            }
            break;
        case USER_REGISTER_SUCCESS:
            state = {
                ...state,
                success: action.payload
            }
            break;
        case USER_REGISTER_FAIL:
            state = {
                ...state,
                error: action.payload
            }
            break;
        case GET_ALL_USERS_SUCCESS:
            state = {
                ...state,
                allUsers: action.payload
            }
            break;
        case GET_FOLLOWING_USERS_SUCCESS:
            state = {
                ...state,
                followingUsers: action.payload
            }
            break;
        case PLAYER_UNFOLLOWED:
            state = {
                ...state,
                followingUsers: state.followingUsers.filter((users: any) => users.id != action.payload.id)
            }
            break;
        case PLAYER_FOLLOWED: 
            state = {
                ...state,
                followingUsers: [...state.followingUsers, action.payload]
            }
            break;

        default: state = { ...state }
    }
    return state;
}
export default auth;