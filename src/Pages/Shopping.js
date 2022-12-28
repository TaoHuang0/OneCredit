import React, { useState } from 'react'
import SortCard from '../Components/SortCard'

const Shopping = ( { creditCards } ) => {
  const unsortCards = [...creditCards]
  const [select, setSelect] = useState('')
  const [sortCards, setSortCards] = useState([])
  const [label, setLabel] = useState('')

  const sortCreditCards = (e) => {
    e.preventDefault()

    if(!select){
      alert('No Category Picked')
      return
    }
    
    if(select === 'grocery Benifit'){
      unsortCards.sort(function(a, b){ return b.groceryBenifit - a.groceryBenifit })
    }else if(select === 'online Benifit'){
      unsortCards.sort(function(a, b){ return b.onlineBenifit - a.onlineBenifit })
    }else if(select === 'travel Benifit'){
      unsortCards.sort(function(a, b){ return b.travelBenifit - a.travelBenifit })
    }
    setSortCards([unsortCards[0]])
    setLabel(select)
  }

  return (
    <div className='shopping'>
      <form className='categoryForm' onSubmit={ sortCreditCards }>
        <label className='cardName'> Select Category Here: </label>
        <select type="text" className="chooseCategory" name="Choose Category" value={select} onChange={(e) => {setSelect(e.target.value)}}>
                <option value="">--Please choose an option--</option>
                <option value='grocery Benifit'> Grocery Shopping </option>
                <option value='online Benifit'> Online Shopping </option>
                <option value='travel Benifit'> Travel Shopping </option>
        </select>
        <button className='categoryBtn'> Submit </button>
      </form>
      <div className='categoryCards'>
        {sortCards.map((card) => (
          <div>
            <h2 id='sortH2'> Best Credit Card for {label}: </h2>
            <SortCard creditCard={card} />
          </div>
          ))}
      </div>
    </div>
  )
}

export default Shopping
