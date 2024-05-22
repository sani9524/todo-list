import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import {useState} from "react"

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

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
    const valueEditable = todos[index]
    setTodoValue(valueEditable)
    handleDelete(index)
  }

  return (
    <>
      <ToDoInput todoValue={todoValue}setTodoValue={setTodoValue}handleUpdate={handleUpdate}/>
      <ToDoList handleEdit={handleEdit} handleDelete={handleDelete}todos={todos}/>
    </>
  )
}

export default App
