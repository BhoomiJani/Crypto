import { createStore } from "redux";
import reducerIndex from "./redux/reducer";


const store = createStore(
    reducerIndex,
    {},
);

export default store;