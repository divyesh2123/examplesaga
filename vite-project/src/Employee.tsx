import React, { useState } from 'react'
import { IEmployee } from './interfaceInfo/Iemployee'
import { useDispatch } from 'react-redux'
import { EmployeeRequest } from './action/emploeeaction';
import { AppDispatch } from './store/store';

export default function Employee() {
    const [data,setdata]= useState<IEmployee>({
        avatar: "",
        name: ""
    })

    const usedip = useDispatch<AppDispatch>();

    const handleChange = (e:any)=>{

        setdata({...data,[e.target.name]:e.target.value})
    }

    const handelSubmit = (e:any)=>{

        e.preventDefault();

        usedip(EmployeeRequest(data));

    }
  return (
    <form onSubmit={handelSubmit}>
        <input type='text' name="avatar" onChange={handleChange} />
        <input type='text' name="name" onChange={handleChange} />
        <input type='submit' value="Save"/>
    </form>
  )
}
