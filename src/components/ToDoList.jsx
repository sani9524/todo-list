import React from 'react'
import ToDoCard from './ToDoCard';

export default function ToDoList(props) {
  const{todos, handleDelete} = props
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props}key={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
