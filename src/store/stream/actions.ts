import { GENERATE_STREAM, GENERATE_STREAM_SUCCESS } from "./actionTypes";


export const generateStream = () => ({
    type: GENERATE_STREAM
})

export const generateStreamSuccess = ({streamKey, streamUrl}: {streamKey: string, streamUrl: string}) => ({
    type: GENERATE_STREAM_SUCCESS,
    payload: {streamKey, streamUrl}
})