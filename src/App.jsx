import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  // Fetch todos from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.error(err))
  }, [])

  function handleAddTodos(newTodo) {
    axios.post("http://localhost:5000/api/todos", { title: newTodo })
      .then(res => setTodos([...todos, res.data]))
      .catch(err => console.error(err))
  }

  function handleDeleteTodo(index) {
    const todo = todos[index]
    axios.delete(`http://localhost:5000/api/todos/${todo.id}`)
      .then(() => {
        const newList = todos.filter((_, i) => i !== index)
        setTodos(newList)
      })
      .catch(err => console.error(err))
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index].title
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <h1>My Todo</h1>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />

    </>
  )
}

export default App
