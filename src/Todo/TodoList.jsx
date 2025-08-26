import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const TodoList = ({ data, onHandleDeleteTodo }) => {
  return (
    <li className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <IoMdCheckmark />
      </button>
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDelete />
      </button>
    </li>
  );
};
