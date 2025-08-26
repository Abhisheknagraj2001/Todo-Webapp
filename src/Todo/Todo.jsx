import { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id,content,checked}=inputValue;

    if (!content) return; // to check if the input field is empty

    // if (task.includes(inputValue)) return; // prevent duplicates

    const ifTodoContentMatched=task.find((curTask)=> curTask.content === content);
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id:id,content:content,checked:checked}]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };



  const handleCheckedTodo = (id) => {
  const updatedTask = task.map((curTask) => {
    if (curTask.id === id) {
      return { ...curTask, checked: !curTask.checked };
    } else {
      return curTask;
    }
  });
  setTask(updatedTask);
};

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        {task.map((curTask, index) => (
          <TodoList
            key={curTask.id} 
            id={curTask.id} 
            data={curTask.content}
            checked={curTask.checked}
            onHandleDeleteTodo={handleDeleteTodo}
            onHandleCheckedTodo={handleCheckedTodo}
          />
        ))}
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
