import {all, fork} from "redux-saga/effects";

import AuthSaga from "./auth/saga";
import PlayerSaga from "./Player/saga";

export default function* rootSaga() {
    yield all([
        fork(AuthSaga),
        fork(PlayerSaga)
    ]);
}