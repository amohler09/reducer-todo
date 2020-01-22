import React, {useReducer, useState} from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)
    console.log('this is the state', state)
    const [todoText, setTodoText] = useState('')
    console.log('todotext', todoText)

    const handleChanges = e => {
        setTodoText(e.target.value);
        //console.log(e.target.value)
    }

    return (
        <div>
           <input
           className='todo-input'
           type='text'
           name='todoText'
           value={todoText}
           onChange={handleChanges}
           />
           <button 
           onClick={() => dispatch({ type: 'ADD_TODO', payload: todoText})}
           >Add Todo Item</button>
        </div>
    )
}

export default TodoForm;