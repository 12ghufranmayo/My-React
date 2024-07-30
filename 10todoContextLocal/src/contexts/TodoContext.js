import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"Todo message",
        completed:false
    }],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    togglecomplete: (id) => {},
})

export const TodoContextProvider = TodoContext.Provider

export const useTodoContext = () => {
    return useContext(TodoContext);
}