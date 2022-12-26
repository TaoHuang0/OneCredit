import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { useState } from 'react';

const CardInfo = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

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
    setNumber('')
    setName('')
    setExpiry('')
    setCvc('')
  }

  return (
    <div id="PaymentForm">
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
              pattern='^[0-9]{3}[0-9]?$'
              title='CVC Must be In 3 - 4 Digits'
            />
          </div>
          <div>
            <button id='cardInputBtn'> <h2> Add My Card Information </h2> </button>
          </div>
        </form>
    </div>
  )
}

export default CardInfo
