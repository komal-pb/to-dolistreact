import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({ todos, handleDeleteTodo, handleEditTodo }) {
  return (
    <ul className='main'>
      {todos.map((todo, index) => (
        <TodoCard 
          key={todo.id} 
          index={index} 
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo}
        >
          <p>{todo.title}</p>
        </TodoCard>
      ))}
    </ul>
  )
}
