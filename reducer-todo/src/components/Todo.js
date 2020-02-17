import React from 'react'

export const Todo = props => {
    return(
        <div>
            <input 
            type='checkbox' />
            <span>{props.task}</span>
        </div>
    )
}