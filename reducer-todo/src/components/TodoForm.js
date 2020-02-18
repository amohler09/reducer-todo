import React, { useReducer, useState } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import  Todo  from './Todo'

export const TodoForm = () => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const [todoInput, setTodoInput] = useState('');

   const handleChanges = e => {
       setTodoInput(e.target.value)
   }

   const toggleComplete = task => {
       dispatch({ type: 'TOGGLE_TODO', payload: task.id})
   }

    

    return (
        <div>
          <div className='todo-input'>
                <input
                className='todoInput'
                type='text'
                value={todoInput}
                name='todoInput'
                onChange={handleChanges}
                />
                <button onClick={() => dispatch({ type: 'ADD_TODO', payload: todoInput})}>Add Todo Item</button>
                <button onClick={() => dispatch({ type: 'CLEAR_TODOS'})}>Clear Completed Items</button>
            </div>
            <div className='todo'>
                <h2>Todo</h2>
                <Todo state={state} toggleComplete={toggleComplete}/>
            </div>
            
      
        </div>
    )
}