import React from 'react'

function TodoList({ tasks }) {
    return (
        <ul id="task-list">
            {tasks.map((task) => (<li key={task}>{task}</li>))}
        </ul >
    )
}

export default TodoList