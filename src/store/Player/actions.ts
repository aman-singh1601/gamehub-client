import { BLOCK_PLAYER, BLOCK_PLAYER_SUCCESS, FOLLOW_PLAYER, FOLLOW_PLAYER_SUCCESS, GET_PLAYER_PROFILE_SUCCESS, GET_PYALER_PROFILE, UNBLOCK_PLAYER, UNBLOCK_PLAYER_SUCCESS, UNFOLLOW_PLAYER, UNFOLLOW_PLAYER_SUCCESS } from "./actionTypes";


export const getPlayerProfile = (id: string) => ({
    type: GET_PYALER_PROFILE,
    payload: id
})

export const getPlayerProfileSuccess = ({player, isFollowing, isBlocked}: {player: any, isFollowing: boolean, isBlocked: boolean}) => ({
    type: GET_PLAYER_PROFILE_SUCCESS,
    payload: {player, isFollowing, isBlocked}
})

export const followPlayer = (id: string) => ({
    type: FOLLOW_PLAYER,
    payload: id
})

export const followPlayerSucccess = (isFollowing: boolean) => ({
    type: FOLLOW_PLAYER_SUCCESS,
    payload: isFollowing
});

export const unfollowPlayer = (id: string) => ({
    type: UNFOLLOW_PLAYER,
    payload: id
})

export const unfollowPlayerSucccess = (isFollowing: boolean) => ({
    type: UNFOLLOW_PLAYER_SUCCESS,
    payload: isFollowing
});

export const blockPlayer = (id: string) => ({
    type: BLOCK_PLAYER,
    payload: id
})

export const blockPlayerSucccess = (isBlocked: boolean) => ({
    type: BLOCK_PLAYER_SUCCESS,
    payload: isBlocked
});
export const unblockPlayer = (id: string) => ({
    type: UNBLOCK_PLAYER,
    payload: id
})

export const unblockPlayerSucccess = (isBlocked: boolean) => ({
    type: UNBLOCK_PLAYER_SUCCESS,
    payload: isBlocked
});