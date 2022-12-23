import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from "./Pages/Home"
import Task from "./Pages/Task"
import Suggest from './Pages/Suggest'
import Shopping from './Pages/Shopping'
import CardInput from './Pages/CardInput';
import Add from './Images/add.png'
import { useState } from 'react'

function App() {
  const [creditCards, setCreditCards] = useState([
    { id: 1,
      type: 'Discover It',
      approveDate: '12/12/2022'
    },
    { id: 2,
      type: 'BOA 321',
      approveDate: '10/10/2021'
    }
  ])

  const addCreditCard = (card) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newCard = {id, ...card}
    setCreditCards([...creditCards, newCard])
  }

  return (
    <Router>
      <div id='head'>
        <h1>Dashboard</h1>
        <Link to='/cardInput'> <img id='addIcon' src={Add} alt='Add New Credit Card' width={50} height={50} /> </Link>
      </div>
      <nav>
        <Link className='menu' to='/'> <h2> Manage Credit Card </h2> </Link>
        <Link className='menu' to='/task'> <h2> Reminder </h2> </Link>
        <Link className='menu' to='/suggest'>  <h2> Suggest New Credit Card </h2> </Link>
        <Link className='menu' to='/shopping'> <h2> Category Shopping </h2> </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home creditCards={creditCards} />} />
        <Route path="/task" element={<Task />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/cardinput" element={<CardInput onAdd={addCreditCard} />} />
      </Routes>
    </Router>
  );
}

export default App;
