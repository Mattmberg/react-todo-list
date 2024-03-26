import React, {useState} from 'react'

export const EditForm = ({editTask, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
      };
      
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="task-input" placeholder='Update task' />
    <button type="submit" className='task-btn'>Add Task</button>
  </form>
  )
}