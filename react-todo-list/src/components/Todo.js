import React from 'react'
import { FaPen, FaTrash  } from 'react-icons/fa'
export const Task = ({task, deleteTask, editTask, toggleComplete}) => {
 
  return (
    <div className="Task">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>

        <div>
          <FaPen style={{marginRight: "8px"}} onClick={() => editTask(task.id)} />
          <FaTrash onClick={() => deleteTask(task.id)} />
        </div>
    </div>
  )
}