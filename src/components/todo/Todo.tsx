import TodoForm from "./TodoForm.tsx";

const Todo  =() =>{
    return (
        <>
        <div className="max-w-sm mx-auto">
            <h1 className="text-center text-2xl py-8">To Do List</h1>

            <TodoForm/>
        </div>
        </>
    )
}
export default Todo;