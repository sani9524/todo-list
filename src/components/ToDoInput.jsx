import {useState} from 'react'
export default function ToDoInput(props){
    const {handleUpdate} = props
    const [todoValue, setTodoValue] = useState('')
    return(
        <header>
            <input value ={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter your todo:" />
            <button onClick={() => {
                handleUpdate(todoValue)
                setTodoValue('') //reset the input after entering todo
            }}>Add</button>
        </header>
    )
}