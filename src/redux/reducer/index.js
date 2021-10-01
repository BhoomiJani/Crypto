import { combineReducers } from "redux";
import { reducer } from "./reducer";


const reducerIndex = combineReducers({
    data: reducer
})

export default reducerIndex;