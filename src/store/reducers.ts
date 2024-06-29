import {combineReducers} from "redux";

import auth from "./auth/reducer";
import player from "./Player/reducer";




const rootReducer = combineReducers({
    auth,
    player
});

export default rootReducer;