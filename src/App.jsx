import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import {useState} from "react"

function App() {
  
  const [todos, setTodos] = useState([])

  function handleUpdate(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDelete(index){
    const newTodoList = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEdit(index){

  }

  return (
    <>
      <ToDoInput handleUpdate={handleUpdate}/>
      <ToDoList handleDelete={handleDelete}todos={todos}/>
    </>
  )
}

export default App
