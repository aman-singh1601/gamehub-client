import { BLOCK_PLAYER_SUCCESS, FOLLOW_PLAYER_SUCCESS, GET_PLAYER_PROFILE_SUCCESS, UNBLOCK_PLAYER_SUCCESS, UNFOLLOW_PLAYER_SUCCESS } from "./actionTypes"

interface INITType {
    player: any,
    isFollowing: boolean
    isBlocked: boolean
}
const INIT = {
    player: null,
    isFollowing: false,
    isBlocked: false
}

const player = (state = INIT, action: any) => {
    switch(action.type) {
        case GET_PLAYER_PROFILE_SUCCESS:
            state = {
                ...state,
                player: action.payload.player,
                isFollowing: action.payload.isFollowing,
                isBlocked: action.payload.isBlocked
            }
            break;
        case FOLLOW_PLAYER_SUCCESS:
            state = {
                ...state,
                isFollowing: action.payload
            }
        break;
        case BLOCK_PLAYER_SUCCESS:
            state = {
                ...state,
                isBlocked: action.payload
            }
        break;
        case UNFOLLOW_PLAYER_SUCCESS:
            state = {
                ...state,
                isFollowing: action.payload
            }
        break;
        case UNBLOCK_PLAYER_SUCCESS:
            state = {
                ...state,
                isBlocked: action.payload
            }
        break;
        default: state = {...state}
    }
    return state;
}
export default player;