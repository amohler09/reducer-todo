import React, { useReducer } from 'react'
import {initialState, todoReducer} from '../reducers/todoReducer'
import Todo from './Todo'

const TodoList = () => {
const [state] = useReducer(todoReducer, initialState);
    

    return (
        <div className='todo-list'>
            {state.map(task => (
                <Todo 
                item={task.item} 
                id={task.id} 
                completed={task.completed}/>
            ))}
        </div>
    )
}

export default TodoList;