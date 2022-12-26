import React from 'react';
import Header from '../Components/Header'
import TaskInput from '../Components/TaskInput'
import Tasks from '../Components/Tasks';
import { useState } from 'react';
import { useEffect } from 'react';

function Task() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  //add task
  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks',
    {method: 'POST', 
     headers: {
      'Content-type' : 'application/json'
     },
     body: JSON.stringify(task)
     })

     const data = await res.json()

     setTasks([...tasks, data])
  }

  //delete task
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE',})
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <TaskInput onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> :
      <h3>No Avaliable Tasks Now</h3>}
    </div>
  );
}

export default Task;
