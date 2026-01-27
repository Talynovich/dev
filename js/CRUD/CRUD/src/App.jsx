import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { LoadTodos, saveTodos } from './utils/storage.js'

const data = [
  {
    id: 1,
    title: 'Drink coffee',
    completed: false,
  },
  {
    id: 2,
    title: 'Go to school',
    completed: true,
  },
  {
    id: 3,
    title: 'Study',
    completed: false,
  },
]

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
      })
      .catch((err) => console.log(err))
  }

  const addNewTodo = (title) => {
    const newTodos = [...todos, { id: uuidv4(), title, commpleted: false }]
    setTodos(newTodos)
    saveTodos(newTodos)
  }

  const handleAddTodo = (id, newStatus) => {
    // fetch(`https://697901e2cd4fe130e3daecce.mockapi.io/api/todos/${id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ completed: newStatus }),
    // })
    //   .then((res) => res.json())
    //   .then(() => {})
    const updatesTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )

    setTodos(updatesTodos)
    saveTodos(updatesTodos)
  }

  useEffect(() => {
    fetch('https://697901e2cd4fe130e3daecce.mockapi.io/api/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  })

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
