import  { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store';

const Welcome = () => {
  const {todoItems} = useContext(TodoItemsContext );
  
  return (
    todoItems.length === 0 && <p style={{fontWeight:900,fontSize: 50 }}> Enjoy your day</p>
   
  )
}

export default Welcome
