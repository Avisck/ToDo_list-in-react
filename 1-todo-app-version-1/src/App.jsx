import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";


const todoItemReducer = (currTodoItems,action) => {
  let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEMS"){
     newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];

  } else if(action.type === "DELETE_ITEMS"){
     newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
    

  }
  return newTodoItems;
}

const App = () => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer,[]);
  
  const addNewItem = (itemName, itemDueDate) => {
     const newItemsAction ={
      type:"NEW_ITEMS",
      payload:{
        itemName,
        itemDueDate,

      },
     };
     dispatchTodoItems (newItemsAction);
  };
  const deleteItem = (todoItem) => {
    const deleteItemsAction ={
      type:"DELETE_ITEMS",
      payload :{
        itemName: todoItem,
      },
    };
    dispatchTodoItems(deleteItemsAction);
   
    
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="todo-contentner">
        <AppName />
        <AddTodo />
        <Welcome />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;
