import { call, put, takeLatest } from "redux-saga/effects";
import { UserError, UserRequest, UserSuc } from "../action/userAction";
import { GetUsers } from "../service/userservice";
import { IUser } from "../interfaceInfo/Iuser";

function* loadData(action:any)
{
    try
    {
   let d : IUser[] = yield call(GetUsers);
        
   yield put(UserSuc(d))
        
    }
    catch(erro)
    {
        yield put(UserError(erro))
    }
}

export function* watcherUser()
{
    yield takeLatest(UserRequest().type,loadData)
}