import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { LoadTodos, saveTodos } from './utils/storage.js'

function App() {
  const [todos, setTodos] = useState(LoadTodos())
  const handleDeleteTodo = (id) => {
    fetch(`https://697901e2cd4fe130e3daecce.mockapi.io/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
        localStorage.removeItem('todos')
      })
      .catch((err) => console.log(err))
  }

  const addNewTodo = (title) => {
    fetch(`https://697901e2cd4fe130e3daecce.mockapi.io/api/todos/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then((createdTodo) => {
        const newTodos = [...todos, createdTodo]
        console.log(newTodos)
        setTodos(newTodos)
        saveTodos(newTodos)
      })
  }

  const handleAddTodo = (id) => {
    const currentTodo = todos.find((item) => item.id === id)
    fetch(`https://697901e2cd4fe130e3daecce.mockapi.io/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !currentTodo.completed,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        const updatedTodos = todos.map((item) => {
          return item.id === id ? response : item
        })
        setTodos(updatedTodos)
      })
  }

  useEffect(() => {
    fetch('https://697901e2cd4fe130e3daecce.mockapi.io/api/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, [])

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-4 offset-4">
            <TodoInput onAddTodo={addNewTodo} />
            <TodoList
              todos={todos}
              onToggle={handleAddTodo}
              onDelete={handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
