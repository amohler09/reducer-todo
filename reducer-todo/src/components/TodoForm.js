import React, { useReducer, useState } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import  Todo  from './Todo'

export const TodoForm = () => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const [todoInput, setTodoInput] = useState('');

   const handleChanges = e => {
       setTodoInput(e.target.value)
   }

   const toggleComplete = id => {
       dispatch({ type: 'TOGGLE_TODO', payload: id})
   }
    

    return (
        <div>
            <Todo state={state} dispatch={toggleComplete}/>
          <p>Add A Todo</p>
            <input
            className='todoInput'
            type='text'
            value={todoInput}
            name='todoInput'
            onChange={handleChanges}
            />
            <button onClick={() => dispatch({ type: 'ADD_TODO', payload: todoInput})}>Add</button>

            
      
        </div>
    )
}