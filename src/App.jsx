import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import {useState, useEffect} from "react"

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  // local storage 
  function storeData(newTodo){ 
    localStorage.setItem('todos', JSON.stringify({todos:newTodo}))
  }

  function handleUpdate(newTodo){
    const newTodoList = [...todos, newTodo]
    storeData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDelete(index){
    const newTodoList = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })
    storeData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEdit(index){
    const valueEditable = todos[index]
    setTodoValue(valueEditable)
    handleDelete(index)
  }
  //saving data on refresh
  useEffect(()=>{
    if (!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <ToDoInput todoValue={todoValue}setTodoValue={setTodoValue}handleUpdate={handleUpdate}/>
      <ToDoList handleEdit={handleEdit} handleDelete={handleDelete}todos={todos}/>
    </>
  )
}

export default App
