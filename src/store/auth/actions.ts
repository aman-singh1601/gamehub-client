import {
    USER_LOGIN,
    USER_REGISTER,
    GET_USER_PROFILE,
    USER_REGISTER_SUCCESS,
    GET_ALL_USERS,
    GET_ALL_USERS_SUCCESS,
    GET_FOLLOWING_USERS,
    GET_FOLLOWING_USERS_SUCCESS,
    PLAYER_UNFOLLOWED,
    PLAYER_FOLLOWED
} from "./actionTypes";

export const userLogin = (number: string) => ({
    type: USER_LOGIN,
    payload: number
})

export const userRegisterSuccess = (message: string) => ({
    type: USER_REGISTER_SUCCESS,
    payload: message
})

export const userRegister = (payload: string) => ({
    type: USER_REGISTER,
    payload
})

export const getUserProfile = () => ({
    type: GET_USER_PROFILE,
})

export const getAllUsers = () => ({
    type: GET_ALL_USERS
})

export const getAllUsersSuccess = (users: any) => ({
    type: GET_ALL_USERS_SUCCESS,
    payload: users
})

export const getFollowingUsers = () => ({
    type: GET_FOLLOWING_USERS
})

export const getFollowingUsersSuccess = (users: any) => ({
    type: GET_FOLLOWING_USERS_SUCCESS,
    payload: users
})

export const playerUnfollowed = (user: any) => ({
    type: PLAYER_UNFOLLOWED,
    payload: user
})

export const playerFollowed = (user: any) => ({
    type: PLAYER_FOLLOWED,
    payload: user
})