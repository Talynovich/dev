export const LoadTodos = () => {
  try {
    const stored = localStorage.getItem('todos')
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.log(error)
    return []
  }
}

export const saveTodos = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos))
  } catch (error) {
    console.log(error)
  }
}
