import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { INC } from "../action/counteraction";


function* counterSaga()
{
    console.log("D");
    yield delay(1000);
    yield put(INC());
}
export default function* watcherSaga()
{
   
    yield takeLatest('CounterAsnyc',counterSaga);
}
