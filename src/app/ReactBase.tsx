import React, { useState } from 'react';
import { evntDispatcher, ActionTypes, store } from './store';

export const ReactBase = () =>{
    const [count, setCount] = useState(0);
    store.subscribe((state)=>{
        setCount(state.count);
    });
    return(
        <div>
            <p>
                React counter {count} times
            </p>
            <button onClick={()=>incrementCounter()}>increment</button>
            <button onClick={()=>decrementCounter()}>decrement</button>
        </div>
    )
}

const incrementCounter = () =>{
    console.log('hit react')
    evntDispatcher.next({type:ActionTypes.INCR})
}

const decrementCounter = () =>{
    console.log('hit react')
    evntDispatcher.next({type:ActionTypes.DECR})
}