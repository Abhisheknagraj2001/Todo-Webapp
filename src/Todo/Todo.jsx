import { useEffect, useState } from "react"
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import "./Todo.css"

export const Todo = () => {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime,setDateTime]=useState("");  //using this state to maintain date and time consistantly updatting

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



    //todo date and time
    
 useEffect(()=>{          ///using useeffect to avaiod memory leak
const interval= setInterval(()=>{
        
    const now=new Date();   // current date & time
    const formattedDate=now.toLocaleDateString();   // e.g., 8/26/2025
    const formattedTime=now.toLocaleTimeString();   // e.g., 11:15:30 AM

    setDateTime(`${formattedDate}-${formattedTime}`);   // Update state with "date - time"
    },1000 )
    return ()=> clearInterval(interval);          //  Cleanup function (runs when component unmounts)             
 }, [])
   



    return <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
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