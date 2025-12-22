import Button from "../UI/Button.tsx";
import type {TodoFormProps} from "../../types.ts";
import {useState} from "react";


const TodoForm = ({addTodo, inputRef}:TodoFormProps) => {
    const [text, setText] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();//δεν κάνει refresh τη σελίδα
        if (text.trim() !== "") {
            addTodo(text);
            setText("");
            inputRef.current?.focus();
        }
    }
    return (
        <>
            <form className="flex gap-4 mb-4" onSubmit={handleSubmit}>

                <input
                    ref={inputRef}
                    value={text}
                    onChange={handleChange}
                    type="text"
                    className="flex-1 border p-2 rounded"
                    placeholder="New task...." />

                <Button label="Add Task"/>

            </form>
        </>
    )

}
export default TodoForm;