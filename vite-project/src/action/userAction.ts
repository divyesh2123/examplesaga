import { IUser } from "../interfaceInfo/Iuser"

export interface IUserAction
{
    type:string,
    payload?:IUser[] | any ;
}

export const UserRequest = () :IUserAction => ({
  type: 'UserRequest',
  
})

export const UserSuc = (payload1:IUser[]) :IUserAction => ({
    type: 'UserSuc',
    payload:payload1
})

export const UserError = (error:any) :IUserAction => ({
    type: 'UserError',
    payload:error
})
  
  
