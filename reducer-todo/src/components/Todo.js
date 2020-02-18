import React from 'react'

const Todo = props => {
    return (
        <div>
            {props.state.todos.map(task => {
                return (
                    <div className={task.completed ? 'todo-complete' : 'todo'}
                    onClick={() => props.dispatch(task.id)}
                    key={task.id}>
                        <span>{task.item}</span>
                        </div>
                )
            })}
        </div>
      
    )
}

export default Todo;

