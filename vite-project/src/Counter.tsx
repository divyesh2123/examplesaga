import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from './reducer/rootReducer';
import { useDispatch } from 'react-redux';

export default function Counter() {

    const a = useSelector<AppState>(y=>y.counter) as number;
  
    const d= useDispatch();

    const inc = ()=>{

        d({type:"CounterAsnyc"})
    }
  
    return (
    <div>{a}
            <button onClick={inc}>button</button>
    </div>
  )
}
