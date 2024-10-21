import { IUserAction } from "../action/userAction"
import { IUser } from "../interfaceInfo/Iuser"

export interface IUserReducer
{
    data: IUser[],
    isLoading:boolean,
    error:any
}


const initialState : IUserReducer = {

    data: [],
    error: {},
    isLoading: false

}

export default (state = initialState,u:IUserAction) : IUserReducer => {
  switch (u.type) {

  case 'UserRequest':
    return { ...state, isLoading:true }
    case 'UserSuc':
        return { ...state, isLoading:false,data: u.payload }
    case 'UserError':
        return { ...state, isLoading:false,error: u.payload }


  default:
    return state
  }
}
