import React from "react";
import { useState } from "react";

function TodoList({data, handleDelete, completed, handleComplete, isEditable, handleIsEditable,  handleUpdate}) {
  
  const [editTodoText, setEditTodoText] = useState("");

  const editTodo = (index) => {
    handleUpdate(editTodoText,index)    
  }
  
  return (
        <>
        {data.map((todo, index) => (
          <div
          key={todo.text+'_'+index}
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 mb-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"              
          }`}
          >        
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={() => handleComplete(index)}
          />
          
            <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
              isEditable && isEditable.id === todo.id ? "border-black/10 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
            value={isEditable && isEditable.id === todo.id? editTodoText : todo.text}
            onChange={(e) => setEditTodoText(e.target.value)}
            readOnly={isEditable && isEditable.id === todo.id ? false : true }
        />              

          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;                  

                  if (isEditable) {
                    setEditTodoText(todo.text)
                    editTodo(index);
                    handleIsEditable("");
                  } else{
                    handleIsEditable(todo);
                    setEditTodoText(todo.text)
                  }
              }}
              disabled={todo.completed}
          >
          {isEditable && isEditable.id === todo.id ? "📁" : "✏️"}

          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => handleDelete(index)}
          >
              ❌
          </button>
      </div>
        ))}      
      
        </>
    )
 }

 export default TodoList