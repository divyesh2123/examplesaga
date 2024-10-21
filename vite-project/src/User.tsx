import React, { useEffect } from 'react'
import {useSelector,useDispatch}  from 'react-redux'
import { IUserReducer } from './reducer/userReducer';
import { AppState } from './reducer/rootReducer';
import { UserRequest } from './action/userAction';

export default function User() {

    const a   = useSelector<AppState>(y=>y.user) as IUserReducer ;
  
    console.log(a);
    const d= useDispatch();

    useEffect(()=>{

        d(UserRequest())
    },[])
  return (
    <div>User</div>
  )
}
