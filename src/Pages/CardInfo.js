import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'
import Discover from '../Images/Discover.png'
import Boa321 from '../Images/boa321.png'
import Cfu from '../Images/cfu.png'
import Cff from '../Images/cff.png'
import Csp from '../Images/csp.png'
import Swa from '../Images/swa.png'
import Mbb from '../Images/mbb.png'
import Ue from '../Images/ue.png'
import Ag from '../Images/amexGold.jpeg'
import Abcp from '../Images/amexBcp.jpeg'
import Aplat from '../Images/amexPlat.jpeg'
import Adg from '../Images/amexDeltaGold.jpeg'
import Ccc from '../Images/citicc.png'
import Cp from '../Images/citip.png'

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

  const checkInfo = () => {
    let cInfo = false;
    info.map((card) => (card.id === infoCard.id ?  cInfo = true : ''))
    return cInfo
  }

  return(
    <div id="PaymentForm">
        <h2> {infoCard.type} </h2>
        {checkInfo() ? '' :
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        /> }
        { checkInfo() ? '' : 
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
              pattern='^((37|34)[0-9]{13})|(4[0-9]{13}([0-9]{3}?))|(5[0-9]{15})|(65[0-9]{14})|(3[0-9]{13})$'
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
        </form> }
        { checkInfo() ? 
          <div>
            {infoCard.type === 'Discover It' ? <img className='cardInfoimage' src={Discover} alt='Discover It' width={350} height={200} /> : ''}
            {infoCard.type === 'BOA 321' ? <img className='cardInfoimage' src={Boa321} alt='BOA 321' width={350} height={200} /> : ''}
            {infoCard.type === 'CHASE FREEDOM UNLIMITED' ? <img className='cardInfoimage' src={Cfu} alt='CHASE FREEDOM UNLIMITED' width={350} height={200} /> : ''}
            {infoCard.type === 'CHASE FREEDOM FLEX' ? <img className='cardInfoimage' src={Cff} alt='CHASE FREEDOM FLEX' width={350} height={200} /> : ''}
            {infoCard.type === 'CHASE SAPPHIRE PREFERRED' ? <img className='cardInfoimage' src={Csp} alt='CHASE SAPPHIRE PREFERRED' width={350} height={200} /> : ''}
            {infoCard.type === 'SOUTHWEST RAPID REWARDS® PLUS' ? <img className='cardInfoimage' src={Swa} alt='SOUTHWEST RAPID REWARDS® PLUS' width={350} height={200} /> : ''}
            {infoCard.type === 'MARRIOTT BONVOY BOUNDLESS®' ? <img className='cardInfoimage' src={Mbb} alt='MARRIOTT BONVOY BOUNDLESS®' width={350} height={200} /> : ''}
            {infoCard.type === 'UNITED EXPLORER' ? <img className='cardInfoimage' src={Ue} alt='UNITED EXPLORER' width={350} height={200} /> : ''}
            {infoCard.type === 'American Express® Gold Card' ? <img className='cardInfoimage' src={Ag} alt='American Express® Gold Card' width={350} height={200} /> : ''}
            {infoCard.type === 'Blue Cash Preferred® Card' ? <img className='cardInfoimage' src={Abcp} alt='Blue Cash Preferred® Card' width={350} height={200} /> : ''}
            {infoCard.type === 'American Express Platinum Card' ? <img className='cardInfoimage' src={Aplat} alt='American Express Platinum Card' width={350} height={200} /> : ''}
            {infoCard.type === 'Delta SkyMiles® Gold American Express Card' ? <img className='cardInfoimage' src={Adg} alt='Delta SkyMiles® Gold American Express Card' width={250} height={150} /> : ''}
            {infoCard.type === 'Citi Custom Cash Card' ? <img className='cardInfoimage' src={Ccc} alt='Citi Custom Cash Card' width={350} height={200} /> : ''}
            {infoCard.type === 'Citi Premier® Credit Card' ? <img className='cardInfoimage' src={Cp} alt='Citi Premier® Credit Card' width={350} height={200} /> : ''}
          </div> : ''
        }
        <div className={ checkInfo() ? 'infoYes' : '' }>
          <div>
            <h2 id='infoDes'> {info.map((card) => (card.id === infoCard.id ? 'Your Card Information:' : ''))} </h2>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Card Number: ' + card.number : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Card Holder Name: ' + card.name : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'Expire Date: ' + card.expiry : ''))} </h3>
            <h3> {info.map((card) => (card.id === infoCard.id ? 'CVC: ' + card.cvc : ''))} </h3>
          </div>
          { checkInfo() ?
            <FaTimes className='deleteCard'
            style={{ color: 'red', cursor: 'pointer', marginLeft: '2em'}}
            onClick={ () => deleteCardinfo(infoCard.id) }
            /> : '' }
        </div>
    </div>
  )
}

export default CardInfo
