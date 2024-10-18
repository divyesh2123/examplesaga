import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const roorReducer= combineReducers({
    counter:counterReducer
});

export type AppState = ReturnType<typeof roorReducer>;

export default roorReducer;