import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Home from "./Pages/Home"
import Task from "./Pages/Task"
import Shopping from './Pages/Shopping'
import CardInput from './Pages/CardInput'
import CardInfo from './Pages/CardInfo'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [creditCards, setCreditCards] = useState([])
  const [infoCard, setInfoCard] = useState('')

  useEffect(() => {
    const getCards = async() => {
      const cardsFromServer = await fetchCards()
      setCreditCards(cardsFromServer)
    }
    getCards()
  }, [])

  const fetchCards = async() => {
    const res = await fetch('http://localhost:5000/cards')
    const data = await res.json()
    return data
  }

  const addCreditCard = async(card) => {
    const res = await fetch('http://localhost:5000/cards',
    {method: 'POST', 
     headers: {
      'Content-type' : 'application/json'
     },
     body: JSON.stringify(card)
     })

     const data = await res.json()

     setCreditCards([...creditCards, data])
  }

  const deleteCreditCard = async(id) => {
    await fetch(`http://localhost:5000/cards/${id}`, {method: `DELETE`,})
    setCreditCards(creditCards.filter((card) => card.id !== id))
  }

  const onClickinfo = (card) => {
    setInfoCard(card)
  }

  return (
    <Router>
      <div id='head'>
        <h1>Dashboard</h1>
        <Link to='/cardInput'> <FontAwesomeIcon icon={faPlus} id='plusIcon' /> </Link>
      </div>
      <nav>
        <Link className='menu' id='menu1' to='/'> <h2> Manage Credit Card </h2> </Link>
        <Link className='menu'  id='menu2' to='/task'> <h2> Reminder </h2> </Link>
        <Link className='menu' id='menu3'  to='/shopping'> <h2> Category Shopping </h2> </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home creditCards={creditCards} onDelete={deleteCreditCard} onClickinfo={onClickinfo} />} />
        <Route path="/task" element={<Task />} />
        <Route path="/shopping" element={<Shopping creditCards={creditCards} />} />
        <Route path="/cardinput" element={<CardInput onAdd={addCreditCard} />} />
        <Route path="/cardinfo" element={<CardInfo infoCard={infoCard} />} />
      </Routes>
    </Router>
  );
}

export default App;
