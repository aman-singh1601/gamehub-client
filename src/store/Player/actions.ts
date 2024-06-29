import { FOLLOW_PLAYER, FOLLOW_PLAYER_SUCCESS, GET_PLAYER_PROFILE_SUCCESS, GET_PYALER_PROFILE, UNFOLLOW_PLAYER, UNFOLLOW_PLAYER_SUCCESS } from "./actionTypes";


export const getPlayerProfile = (id: string) => ({
    type: GET_PYALER_PROFILE,
    payload: id
})

export const getPlayerProfileSuccess = ({player, isFollowing}: {player: any, isFollowing: boolean}) => ({
    type: GET_PLAYER_PROFILE_SUCCESS,
    payload: {player, isFollowing}
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