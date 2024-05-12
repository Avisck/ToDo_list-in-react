import { useContext, useState } from "react";
import styles from "./AddTodo.module.css";
import { IoAddCircle } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);

  const [todoname, setTodoname] = useState("");
  const [date, setDate] = useState("");

  const handleChangeName = (event) => {
    setTodoname(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    addNewItem(todoname, date);
    setDate("");
    setTodoname("");
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row ab-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo Here"
              value={todoname}
              onChange={handleChangeName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              id=""
              className={styles.input}
              value={date}
              onChange={handleChangeDate}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success ab-btn"
              onClick={handleAddButtonClicked}
            >
              <IoAddCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
