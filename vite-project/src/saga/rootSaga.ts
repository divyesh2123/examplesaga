import { all } from "redux-saga/effects";
import watcherSaga from "./counterSaga";
import { watcherUser } from "./userSaga";
import { watcherEmployee } from "./employeeSaga";

export default function* rootSaga()
{
    yield all([watcherSaga(),watcherUser(),watcherEmployee()]);
}