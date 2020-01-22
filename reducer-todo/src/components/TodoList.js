import React, { useReducer } from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'
import Todo from './Todo'

const TodoList = () => {
const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className='todo-list'>
            {state.map(task => (
                <Todo 
                item={task.item} 
                id={task.id} 
                completed={task.completed}
                onClick={() => dispatch({ type: 'TOGGLE_TODO'})}
                />
            ))}
            
        </div>
    )
}

export default TodoList;