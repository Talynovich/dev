import React, { useState } from 'react'

const TodoInput = ({ onAddTodo }) => {
  const [value, setValue] = useState(``)

  const handleSubmit = () => {
    const title = value.trim()
    if (title) {
      onAddTodo(title)
      setValue(``)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="d-flex mb-3">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        id="todo"
        placeholder="add todo mame"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        type="submit"
        className="btn btn-primary mb-2 ms-2 flex-shrink-0"
        onClick={handleSubmit}
      >
        Add new todo
      </button>
    </div>
  )
}

export default TodoInput
