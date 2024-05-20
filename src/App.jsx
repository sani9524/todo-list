import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import {useState} from "react"

function App() {
  
  const [todos, setTodos] = useState([])

  function handleUpdate(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <ToDoInput handleUpdate={handleUpdate}/>
      <ToDoList todos={todos}/>
    </>
  )
}

export default App
