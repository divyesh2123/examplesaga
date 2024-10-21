import { IEmployeeAction } from "../action/emploeeaction";
import { IEmployee } from "../interfaceInfo/Iemployee"

export interface IEmployeeReducer
{
    data: IEmployee;
    error:any;
    isLoading : boolean;
}


const initialState : IEmployeeReducer = {

    data : {
        avatar : "",
        createdAt: "",
        id : "",
        name : ""
    },
    error: {},
    isLoading: false
}

export default (state = initialState,action: IEmployeeAction) => {
  switch (action.type) {

  case 'EmployeeRequest':
    return { ...state,isLoading:true }

    case 'EmployeeSuc':
        return { ...state, data: action.payload,isLoading:false }


        case 'EmployeeError':
            return { ...state, error: action.payload,isLoading:false }

  default:
    return state
  }
}
