import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  let todos = [
    'Walk your dog',
    'Workout',
    'Do some work'
  ]

  return (
    <>
      <ToDoInput />
      <ToDoList todos={todos}/>
    </>
  )
}

export default App
