import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    GET_USER_FAIL,
    GET_USER_SUCCESS,
    GET_ALL_USERS_SUCCESS
} from "./actionTypes";


interface initialStateType {
    allUsers: any,
    error: null | string,
    success: null | string,
}

const INIT = {
    allUsers: [],
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
        default: state = { ...state }
    }
    return state;
}
export default auth;