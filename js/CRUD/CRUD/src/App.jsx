import classNames from 'classnames'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'

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
  const [todos, setTodos] = useState(data)
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value.trim())
  }
  const addNewTodo = () => {
    if (value !== '') {
      setTodos([
        ...todos,
        { id: todos.length + 1, title: value, completed: false },
      ])
      setValue('')
    }
  }
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="d-flex mb-3">
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="todo"
                placeholder="add todo mame"
                value={value}
                onChange={handleChange}
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
                        'bg-success': todo.completed,
                      }
                    )}
                  >
                    <span>{todo.title}</span>
                    <div>
                      <button type="button" className="btn btn-success me-2">
                        Done
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        Delete
                      </button>
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
