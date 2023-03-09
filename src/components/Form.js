
import React from 'react'

function Form({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input placeholder='Read a book' />
            <button type="submit" id="submit-btn">
                Add new task</button>
        </form>
    )
}

export default Form