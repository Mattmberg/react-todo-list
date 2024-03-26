import React, {useState} from 'react'

export const Form = ({addTask}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
          addTask(value);
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TaskForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="task-input" placeholder='Next Task' />
    <button type="submit" className='task-btn'>Add Task</button>
  </form>
  )
}