import {useState, useRef, useEffect} from "react";
import TodoForm from "./TodoForm.tsx";
import TodoList from "./TodoList.tsx";
import type { TodoProps } from "../../types";

const Todo = () => {
    const [todos, setTodos] = useState<TodoProps[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addTodo = (text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false},
        ])
        console.log(todos);
    }

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    const editTodo = (id: number, newText:string) => {
        setTodos(prev=> prev.map(todo => todo.id === id? {...todo,text: newText}:todo));
    }

    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id? {...todo, completed: !todo.completed}: todo))
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [todos]);

    return (
        <>
            <div className="max-w-sm mx-auto">
                <h1 className="text-center text-2xl py-8">To-Do List</h1>
                <TodoForm addTodo={addTodo} inputRef={inputRef} />
                {/*<TodoList todos={todos} editTodo={editTodo}/>*/}
                <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

            </div>
        </>
    )
}

export default Todo;