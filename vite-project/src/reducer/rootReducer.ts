import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import employeeReducer from "./employeeReducer";

const roorReducer= combineReducers({
    counter:counterReducer,
    user: userReducer,
    employee:employeeReducer
});

export type AppState = ReturnType<typeof roorReducer>;

export default roorReducer;