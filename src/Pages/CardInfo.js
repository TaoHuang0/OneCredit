import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'

const CardInfo = ({ infoCard }) => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  const [info, setInfo] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()

    if(!number){
        alert('No Card Number Input')
        return
    }

    if(!name){
        alert('No Card Holder Name Input')
        return
    }

    if(!expiry){
        alert('No Expire Date Input')
        return
    }

    if(!cvc){
        alert('No CVC Input')
        return
    }
    addInfo( { id: infoCard.id, type: infoCard.type, number: number, name: name, expiry: expiry, cvc: cvc } )
    setNumber('')
    setName('')
    setExpiry('')
    setCvc('')
  }

  useEffect(() => {
    const getInfo = async() => {
      const infoFromServer = await fetchInfo()
      setInfo(infoFromServer)
    }
    getInfo()
  }, [])

  const fetchInfo = async() => {
    const res = await fetch('http://localhost:5000/info')
    const data = await res.json()
    return data
  }

  const addInfo = async(card) => {
    const res = await fetch('http://localhost:5000/info',
    {method: 'POST', 
     headers: {
      'Content-type' : 'application/json'
     },
     body: JSON.stringify(card)
     })

     const data = await res.json()

     setInfo([...info, data])
  }

  const deleteCardinfo = async(id) => {
    await fetch(`http://localhost:5000/info/${id}`, {method: `DELETE`,})
    setInfo(info.filter((card) => card.id !== id))
  }

  return (
    <div id="PaymentForm">
        <h2> {infoCard.type} </h2>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form id='cardinfoForm' onSubmit={onSubmit}>
          <div className='cardinfo'>
            <input
              className='cardinfoInput'
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              value={number}
              pattern='^[0-9]{16}$'
              title='Card Number Must be 16 Digits'
            />
            <input
              className='cardinfoInput'
              type="text"
              name="name"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              value={name}
              pattern='^[A-Z][a-z]+[ ][A-Z][a-z]+$'
              title='Put Card Holder Name Here'
            />
            <input
              className='cardinfoInput'
              type="text"
              name="expiry"
              placeholder="MM/YY"
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              value={expiry}
              pattern='^[0-9]{2}/2[0-9]$'
              title='Expire Date Must be In Format MM/YY'
            />
            <input
              className='cardinfoInput'
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={e => setCvc(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
              value={cvc}
              pattern='^[0-9]{3}[0-9]?$'
              title='CVC Must be In 3 - 4 Digits'
            />
          </div>
          <div>
            <button id='cardInputBtn'> <h2> Add My Card Information </h2> </button>
          </div>
        </form>
        <div className='infoYes'>
          <div>
            <h2 id='infoDes'><b> {info.map((card) => (card.id === infoCard.id ? 'Your Stored Card Information:' : ''))} </b></h2>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Card Number: ' + card.number : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Card Holder Name: ' + card.name : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Expire Date: ' + card.expiry : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'CVC: ' + card.cvc : ''))} </h3>
          </div>
            <FaTimes className='deleteCard'
            style={{ color: 'red', cursor: 'pointer', marginLeft: '2em'}}
            onClick={ () => deleteCardinfo(infoCard.id) }
            />
        </div>
    </div>
  )
}

export default CardInfo
