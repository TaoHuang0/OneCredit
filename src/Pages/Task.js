import Header from '../Components/Header'
import TaskInput from '../Components/TaskInput'
import Tasks from '../Components/Tasks';
import { useState } from 'react';

function Task() {
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      text: 'Vemno Amex Offer Expired',
      day: '01/15/2023',
      reminder: true,
    },
    { 
      id: 2,
      text: 'Discover 5% Amazon End',
      day: '12/31/2022',
      reminder: true,
    },
  ])

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask = { id, ...task }
    setTasks([...tasks, newtask])
  }

  //delete task
  const deleteTask = (id) => {
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
