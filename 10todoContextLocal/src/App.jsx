import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((oldTodos) => [{id:Date.now(), ...todo}, ...oldTodos])
  }

  const updateTodo = (id, todo) => {
    setTodos((oldTodos) => oldTodos.map((prev) => (prev.id) === id ? todo : prev))
  }

  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id))
  }

  const togglecomplete = (id) => {
    setTodos((oldTodos) => oldTodos.map((prev) => prev.id === id ? {...prev, completed:!prev.completed} : prev))

  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
     if (todos && todos.length > 0) {
      setTodos(todos)
     }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, togglecomplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm /> 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {todos.map((todo) => (
                    <div className='w-full' key={todo.id}><TodoItem todo={todo}/></div>
                  ))}
              </div>
          </div>
      </div>
    </TodoContextProvider>
  )
}

export default App