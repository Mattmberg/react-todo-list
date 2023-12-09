import React from 'react'
import { FaPen, FaTrash  } from 'react-icons/fa'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>

        <div>
          <FaPen style={{marginRight: "8px"}} onClick={() => editTodo(task.id)} />
          <FaTrash onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}