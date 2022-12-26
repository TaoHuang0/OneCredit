import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className={task.reminder ? 'taskRemin' : 'task'}>
        <h3>
            {task.text}
            <FaTimes className='deleteTask'
            style={{ color: 'red', cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task
