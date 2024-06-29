import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { FOLLOW_PLAYER, GET_PYALER_PROFILE, UNFOLLOW_PLAYER } from "./actionTypes";
import { followplayer, getplayerprofile, unfollowplayer } from "@/helpers/bakend_helper";
import { followPlayerSucccess, getPlayerProfileSuccess, unfollowPlayerSucccess } from "./actions";


function* getPlayerProfile({payload}: any) {
    try {
        const {player, message, isFollowing} = yield call(getplayerprofile, payload);
        // console.log(message);

        

        yield put(getPlayerProfileSuccess({player, isFollowing}));
    } catch (error) {
        console.log("getPlayerprofile: ", error);
    }
}

function* followPlayer({payload}: any) {
    try {
        const {message, isFollowing} = yield call(followplayer, payload);

        console.log(message + " "+ isFollowing);
        yield put(followPlayerSucccess(isFollowing));
    } catch (error) {
        console.log("FOLLOW_ERROR", error);
    }
}
function* unfollowPlayer({payload}: any) {
    try {
        const {message, isFollowing} = yield call(unfollowplayer, payload);

        console.log(message + " "+ isFollowing);
        yield put(unfollowPlayerSucccess(isFollowing));
    } catch (error) {
        console.log("UNFOLLOW_ERROR", error);
    }
}

function* playerSaga(): SagaIterator {
    yield takeEvery(GET_PYALER_PROFILE, getPlayerProfile);
    yield takeEvery(FOLLOW_PLAYER, followPlayer);
    yield takeEvery(UNFOLLOW_PLAYER, unfollowPlayer);
}

export default playerSaga;