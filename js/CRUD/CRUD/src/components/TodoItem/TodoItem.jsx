import classNames from 'classnames'
import React from 'react'

const TodoList = ({ todo, onToggle, onDelete }) => {
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
        {!todo.completed && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  )
}
export default TodoList
