import React, { useReducer, useState } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'
import { Todo } from './Todo'

export const TodoForm = props => {
   const [state, dispatch] = useReducer(todoReducer, initialState);
   const [todoInput, setTodoInput] = useState('');

   const handleChanges = e => {
       setTodoInput(e.target.value)
   }
    

    return (
        <div>
          <p>Add A Todo</p>
            <input
            className='todoInput'
            type='text'
            value={todoInput}
            name='todoInput'
            onChange={handleChanges}
            />
            <button onClick={() => dispatch({ type: 'ADD_TODO', payload: todoInput})}>Add</button>
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