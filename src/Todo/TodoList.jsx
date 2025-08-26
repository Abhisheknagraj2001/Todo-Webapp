import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export const TodoList = ({ id,data, checked,onHandleDeleteTodo,onHandleCheckedTodo }) => {
  return (
    <li className="todo-item">
      <span className={checked?"checkList" :"notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleCheckedTodo(id)}>
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
