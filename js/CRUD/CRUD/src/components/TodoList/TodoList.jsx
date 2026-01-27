import React from 'react'
import TodoItem from '../TodoItem'

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <ul className="list-group">
      {todos.length === 0 && <li>No Todos</li>}
      {todos.map((todo) => {
        return <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />
      })}
    </ul>
  )
}

export default TodoList
