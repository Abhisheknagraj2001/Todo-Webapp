import { useState } from "react"
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "./Todo.css"

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();   //it prevents the default behaviour of reloading
      
        if (!inputValue) return;    //it doesnt accepts the empty fields

        if (task.includes(inputValue)) {     //checks if the inputvalue is already in the arrays or exists 
            setInputValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, inputValue]); //  adds the next inputvalue to the existing array

        setInputValue("");    // sets the input field to empty string
    }




    return <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-button">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                {
                    task.map((curTask, index) => {                          ///looping through the task array
                        return <li key={index} className="todo-item">
                            <span>{curTask}</span>
                            <button className="check-btn"><IoMdCheckmark /></button>
                            <button className="delete-btn"><MdDelete /></button>
                        </li>
                    })
                }
            </section>
        </section>
    </>

}