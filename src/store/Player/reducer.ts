import { FOLLOW_PLAYER_SUCCESS, GET_PLAYER_PROFILE_SUCCESS, UNFOLLOW_PLAYER_SUCCESS } from "./actionTypes"

interface INITType {
    player: any,
    isFollowing: boolean
}
const INIT = {
    player: null,
    isFollowing: false
}

const player = (state = INIT, action: any) => {
    switch(action.type) {
        case GET_PLAYER_PROFILE_SUCCESS:
            state = {
                ...state,
                player: action.payload.player,
                isFollowing: action.payload.isFollowing
            }
            break;
        case FOLLOW_PLAYER_SUCCESS:
            state = {
                ...state,
                isFollowing: action.payload
            }
        break;
        case UNFOLLOW_PLAYER_SUCCESS:
            state = {
                ...state,
                isFollowing: action.payload
            }
        break;
        default: state = {...state}
    }
    return state;
}
export default player;