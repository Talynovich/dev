import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Input from './shared/ui/input'

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
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (e) => {
    setValue(e.target.value.trim())
  }
  const addNewTodo = () => {
    if (value !== '') {
      localStorage.setItem('todos', JSON.stringify(setTodos))
      setTodos([...todos, { id: uuidv4(), title: value, completed: false }])
      setValue('')
    }
  }
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTodo = (id) => {
    const updatesTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTodos(updatesTodos)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTodo()
    }
  }

  // sessionStorage.setItem('test', 'testvalue')

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="d-flex mb-3">
              <Input
                value={value}
                onChange={handleChange}
                handleKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className="btn btn-primary mb-2 ms-2 flex-shrink-0"
                onClick={addNewTodo}
              >
                Add new todo
              </button>
            </div>
            <ul className="list-group">
              {todos.map((todo) => {
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
                        onClick={() => handleAddTodo(todo.id)}
                      >
                        {todo.completed ? 'Uncheck' : 'Done'}
                      </button>
                      {!todo.completed && (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleDeleteTodo(todo.id)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
