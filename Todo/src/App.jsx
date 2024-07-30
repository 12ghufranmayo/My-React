import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/Todo/TodoList'
import TodoItem from "./components/Todo/TodoForm"

function App() { 
  const [inputText, setinputText] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isTodoEditable, setisTodoEditable] = useState("")
  const [todos, setTodos] = useState([])

  const handleDeleteTodo = (index) => {
    setTodos((todos) => todos.filter((todo , i)  => i !== index))
  }

  const handleEditTodo = (newText, index) => {
    setTodos((todos) =>  todos.map((prev , i)  => (i === index) ? {...prev, text:newText} : prev))
    setisTodoEditable(false)
  }

  const handleCompleted = (index) => {
    setTodos((todos) => todos.map((prev, i) => (i === index) ? {...prev, completed:!prev.completed }: prev))
  }
 
  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
              <TodoItem value={inputText} setInput={setinputText}  setTodo={setTodos} completed={isCompleted}/>
              </div>
              <div className="">                 
                <div className='w-full'><TodoList data={todos} handleDelete={handleDeleteTodo} completed={isCompleted} handleComplete={handleCompleted} isEditable={isTodoEditable} handleIsEditable={setisTodoEditable} handleUpdate={handleEditTodo}/></div>
                 
              </div>
          </div>
      </div>    
    </>
  )
}

export default App
