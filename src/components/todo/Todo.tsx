import TodoForm from "./TodoForm.tsx";
import {useEffect, useRef, useState} from "react";
import type {TodoProps} from "../../types.ts";
import TodoList from "./TodoList.tsx";


const Todo  =() =>{
    const [todos,setTodos]= useState<TodoProps[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = (text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false},
        ])
        console.log(todos);

    }

    useEffect(() => {
        inputRef.current?.focus();
    },[]);

    return (
        <>
        <div className="max-w-sm mx-auto">
            <h1 className="text-center text-2xl py-8">To Do List</h1>
            <TodoForm addTodo={addTodo} inputRef={inputRef} />
            <TodoList todos={todos} />
        </div>
        </>
    )
}
export default Todo;