import { getstreamcred } from "@/helpers/bakend_helper";
import { SagaIterator } from "redux-saga";
import { call, put, takeEvery,  } from "redux-saga/effects";
import { GENERATE_STREAM } from "./actionTypes";
import { generateStreamSuccess } from "./actions";


function* generateStream()  {
    try {
        const {streamKey, streamUrl} = yield call(getstreamcred);

        yield put(generateStreamSuccess({streamKey, streamUrl}));
    } catch (error) {
        console.log("GENERATE_STREAM_ERROR", error);
        return;
    }
}



function* streamSaga(): SagaIterator {
    yield takeEvery(GENERATE_STREAM, generateStream);
}

export default streamSaga;