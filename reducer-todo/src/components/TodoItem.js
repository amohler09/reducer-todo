import React, { useReducer, useState } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import { Todo } from './Todo'

export const TodoItem = props => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const [todoInput, setTodoInput] = useState('')
   
    

    return (
        <div>
       {state.todos.map(task => (
           <Todo
           task={task.item}
           completed={task.completed}
           id={task.id}
           key={task.id}
           />
       ))}
        </div>
    )
}