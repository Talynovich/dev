import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { LoadTodos, saveTodos } from './utils/storage'
import { baseurl } from './constants/constants'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todos, setTodos] = useState(LoadTodos())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${baseurl}/api/todos/${id}`)
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos)
      localStorage.removeItem('todos')
    } catch (error) {
      console.log(error)
    }
  }

  const addNewTodo = async (title) => {
    try {
      const newTodo = { title, completed: false }
      const { data } = await axios.post(`${baseurl}/api/todos/`, newTodo)
      saveTodos([...todos, data])
      setTodos([...todos, data])
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddTodo = async (id) => {
    const currentTodo = todos.find((item) => item.id === id)
    const { data: response } = await axios.put(`${baseurl}/api/todos/${id}`, {
      completed: !currentTodo.completed,
    })
    const updatedTodos = todos.map((item) => (item.id === id ? response : item))
    setTodos(updatedTodos)
  }

  useEffect(() => {
    axios(`${baseurl}/api/todos`)
      .then((data) => setTodos(data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl font-semibold text-blue-600 animate-pulse">
          Loading...
        </span>
      </div>
    )
  }
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-4 offset-4">
            <TodoInput onAddTodo={addNewTodo} />
            {error && (
              <div className="mt-2 p-2 bg-red-100 border border-red-400 text-red-700 rounded-md animate-fadeIn">
                {error}
              </div>
            )}
            {loading ? (
              <div className="flex items-center justify-center h-screen">
                <span className="text-xl font-semibold text-blue-600 animate-pulse">
                  Loading...
                </span>
              </div>
            ) : (
              <TodoList
                todos={todos}
                onToggle={handleAddTodo}
                onDelete={handleDeleteTodo}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
