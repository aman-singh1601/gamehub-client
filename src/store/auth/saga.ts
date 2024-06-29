import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { USER_LOGIN, USER_REGISTER, GET_USER_PROFILE, GET_ALL_USERS } from "./actionTypes";
import { getallusers, registeruser } from "@/helpers/bakend_helper";
import { SagaIterator } from "redux-saga";
import { getAllUsersSuccess, userRegisterSuccess } from "./actions";



function* loginUser({ payload: { user } }: any) {

}
function* registerUser({ payload }: { payload: string }): SagaIterator {
    try {
        const {message, token, user} = yield call(registeruser, { number: payload });

        localStorage.setItem("authUser", JSON.stringify(user));
        localStorage.setItem("access_token", JSON.stringify(token));

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

function* authSaga(): SagaIterator {
    yield takeEvery(USER_LOGIN, loginUser);
    //@ts-ignore
    yield takeEvery(USER_REGISTER, registerUser);
    yield takeLatest(GET_ALL_USERS, getAllUsers);
}

export default authSaga;