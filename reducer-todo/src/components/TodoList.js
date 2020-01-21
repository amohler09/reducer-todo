import React, { useReducer } from 'react'
import {initialState, todoReducer} from './reducers/todoReducer'

export const TodoList = () => {
    [state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state);

    return (
        <div><h1>hello</h1></div>
    )
}