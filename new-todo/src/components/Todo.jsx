import React from 'react'

function Todo(props) {
    return (
        <div>
            <h1>{props.task.task}</h1>
            <h1>{props.task.id}</h1>
        </div>
    )
}

export default Todo
