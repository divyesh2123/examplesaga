import { IEmployee } from "../interfaceInfo/Iemployee";


export interface IEmployeeAction
{
    type:string,
    payload?:IEmployee | any ;
}

export const EmployeeRequest = (payload1:IEmployee) :IEmployeeAction => ({
    type: 'EmployeeRequest',
    payload: payload1
    
  })
  
  export const EmployeeSuc = (payload1:IEmployee) :IEmployeeAction => ({
      type: 'EmployeeSuc',
      payload:payload1
  })
  
  export const EmployeeError = (error:any) :IEmployeeAction => ({
      type: 'EmployeeError',
      payload:error
  })