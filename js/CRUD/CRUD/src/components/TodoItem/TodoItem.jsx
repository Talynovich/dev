import classNames from 'classnames'
import React, { useState } from 'react'

const TodoList = ({ todo, onToggle, onDelete, onChange }) => {
  const [editTodo, setEditTodo] = useState(null)

  if (editTodo !== null) {
    return (
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <input
          type="text"
          placeholder="Edit input"
          value={editTodo.title}
          autoFocus={true}
          onChange={(e) => setEditTodo(e.target.value)}
        />
        <div className="flex">
          <button
            className="btn btn-success ms-2"
            onClick={() => onChange(title, todo.id)}
          >
            Save
          </button>
          <button
            className="btn btn-dark ms-2"
            onClick={() => setEditTodo(null)}
          >
            Cancel
          </button>
        </div>
      </li>
    )
  }
  {
  }
  return (
    <li
      key={todo.id}
      className={classNames(
        `list-group-item d-flex justify-content-between align-items-center`,
        {
          'bg-secondary-subtle': todo.completed,
        }
      )}
    >
      <span>
        {todo.title} {todo.completed && '✅'}
      </span>
      <div>
        <button
          type="button"
          className="btn btn-success me-2"
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed ? 'Uncheck' : 'Done'}
        </button>
        {todo.completed ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setEditTodo(todo)}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  )
}
export default TodoList
