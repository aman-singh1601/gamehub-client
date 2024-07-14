import {combineReducers} from "redux";

import auth from "./auth/reducer";
import player from "./Player/reducer";
import stream from "./stream/reducer";




const rootReducer = combineReducers({
    auth,
    player,
    stream
});

export default rootReducer;