import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { USER_LOGIN, USER_REGISTER, GET_USER_PROFILE, GET_ALL_USERS, GET_FOLLOWING_USERS } from "./actionTypes";
import { getallusers, getfollowingusers, registeruser } from "@/helpers/bakend_helper";
import { SagaIterator } from "redux-saga";
import { getAllUsersSuccess, getFollowingUsersSuccess, userRegisterSuccess } from "./actions";



function* loginUser({ payload: { user } }: any) {

}
function* registerUser({ payload }: { payload: string }): SagaIterator {
    try {
        const {message, token, user} = yield call(registeruser, { number: payload });
        if(token && user) {
            localStorage.setItem("authUser", JSON.stringify(user));
            localStorage.setItem("access_token", JSON.stringify(token));
        }

        yield put(userRegisterSuccess(message));
    } catch (error) {
        console.log(error);
    }

}

function* getAllUsers(): SagaIterator {
    try {
        const {users} = yield call(getallusers);

        yield put(getAllUsersSuccess(users));
    } catch(error) {
        console.log("GET_ALL_USRS", error);
    }
}

function* getFollowingUsers(): SagaIterator {
    try {
        const {followingUsers, message} = yield call(getfollowingusers);

        console.log(message);

        let users = followingUsers.map((follow: any) => follow.following);

        yield put(getFollowingUsersSuccess(users));
    } catch (error) {
        console.log("get_following_users", error);
    }
}

function* authSaga(): SagaIterator {
    yield takeEvery(USER_LOGIN, loginUser);
    //@ts-ignore
    yield takeEvery(USER_REGISTER, registerUser);
    yield takeEvery(GET_ALL_USERS, getAllUsers);
    yield takeEvery(GET_FOLLOWING_USERS, getFollowingUsers);
}

export default authSaga;