import { call, put, takeLatest } from "redux-saga/effects";
import { UserRequest } from "../action/userAction";
import { EmployeeError, EmployeeRequest, EmployeeSuc, IEmployeeAction } from "../action/emploeeaction";
import { AddEmployee } from "../service/employeeservice";
import { IEmployee } from "../interfaceInfo/Iemployee";

function* saveData(action:IEmployeeAction)
{
    try
    {
   let d : IEmployee = yield call(AddEmployee,action.payload);
        
   yield put(EmployeeSuc(d))
        
    }
    catch(erro)
    {
        yield put(EmployeeError(erro))
    }
}

export function* watcherEmployee()
{
    yield takeLatest('EmployeeRequest',saveData)
}