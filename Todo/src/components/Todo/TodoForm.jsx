 import React from "react";

 function TodoItem({value, setInput, setTodo, completed}) {

  const addTodo = () => {
    const newTodo = {
      id:Date.now(),
      text:value,
      completed:completed
    }
    setTodo((prev => [...prev, newTodo]))
    setInput("")
  }  
  
    return (      
      <>
        <div className="flex">
        <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={value}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={() => addTodo()} className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </div>
      </>
      
        
    )
 }

 export default TodoItem