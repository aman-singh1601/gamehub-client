import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { BLOCK_PLAYER, FOLLOW_PLAYER, GET_PYALER_PROFILE, UNBLOCK_PLAYER, UNFOLLOW_PLAYER } from "./actionTypes";
import { blockplayer, followplayer, getplayerprofile, unblockplayer, unfollowplayer } from "@/helpers/bakend_helper";
import { blockPlayerSucccess, followPlayerSucccess, getPlayerProfileSuccess, unblockPlayerSucccess, unfollowPlayerSucccess } from "./actions";
import { playerFollowed, playerUnfollowed } from "../actions";


function* getPlayerProfile({payload}: any) {
    try {
        const {player, message, isFollowing, isBlocked} = yield call(getplayerprofile, payload);
        // console.log(message);

        

        yield put(getPlayerProfileSuccess({player, isFollowing, isBlocked}));
    } catch (error) {
        console.log("getPlayerprofile: ", error);
    }
}

function* followPlayer({payload}: any) {
    try {
        const {message, followData} = yield call(followplayer, payload);

        if(followData) {
            yield put(followPlayerSucccess(true));
            yield put(playerFollowed(followData.following))
        }
        
    } catch (error) {
        console.log("FOLLOW_ERROR", error);
    }
}
function* unfollowPlayer({payload}: any) {
    try {
        const {message, unfollowedData} = yield call(unfollowplayer, payload);

        if(unfollowedData) {
            yield put(unfollowPlayerSucccess(false));
            yield put(playerUnfollowed(unfollowedData.following))
        }
        
    } catch (error) {
        console.log("UNFOLLOW_ERROR", error);
    }
}

function* blockPlayer({payload}: any) {
    try {
        const {message, isBlocked} = yield call(blockplayer, payload);

        console.log(message);

        yield put(blockPlayerSucccess(isBlocked));
    } catch (error) {
        console.log("BLOCK", error);
    }
}
function* unblockPlayer({payload}: any) {
    try {
        const {message, isBlocked} = yield call(unblockplayer, payload);

        console.log(message);

        yield put(unblockPlayerSucccess(isBlocked));
    } catch (error) {
        console.log("BLOCK", error);
    }
}

function* playerSaga(): SagaIterator {
    yield takeEvery(GET_PYALER_PROFILE, getPlayerProfile);
    yield takeEvery(FOLLOW_PLAYER, followPlayer);
    yield takeEvery(UNFOLLOW_PLAYER, unfollowPlayer);
    yield takeEvery(BLOCK_PLAYER, blockPlayer);
    yield takeEvery(UNBLOCK_PLAYER, unblockPlayer);

}

export default playerSaga;