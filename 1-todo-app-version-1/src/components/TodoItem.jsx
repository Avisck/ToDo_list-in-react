import { useContext } from "react";
import "../App.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate, onDeleteclick }) => {

  const {deleteItem} = useContext (TodoItemsContext)
  return (
    <div className="container text-center ab-space">
      <div className="row ab-row">
        <div className="col-6">{todoName} </div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger ab-btn"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
