import React from 'react'


export default function ToDoCard(props) {
  const {children, handleDelete} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button>
      <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button>
      <i className="fa-solid fa-trash"></i>
      </button>
      </div>
    </li>
  )
}
