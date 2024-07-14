import { GENERATE_STREAM_SUCCESS } from "./actionTypes"

interface INIT_TYPE {
    streamUrl: string,
    streamKey: string,
}


const INIT: INIT_TYPE = {
    streamUrl: "",
    streamKey: ""
}

const stream = (state = INIT, action: any) => {
    switch (action.type) {
        case GENERATE_STREAM_SUCCESS:
            state = {
                ...state,
                streamUrl: action.payload.streamUrl,
                streamKey: action.payload.streamKey
            }
            break;
        default:
            state = { ...state }
    }
    return state;
}
export default stream;