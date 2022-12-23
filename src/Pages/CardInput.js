import React from 'react'
import { useState } from 'react'

const CardInput = ( { onAdd } ) => {
    const [creditCard, setCreditCard] = useState('')
    const [approveDate, setApproveDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!creditCard){
            alert('No Credit Card Selection')
            return
        }

        if(!approveDate){
            alert('No Approved Date Input')
            return
        }

        onAdd( { type: creditCard, approveDate } )
        setCreditCard('')
        setApproveDate('')
    }
  return (
    <form className='cardInput1' onSubmit={onSubmit} >
        <div className="text">
            <label className="label"> Choose Credit Card: </label>
            <select type="text" className="topInput" name="Add Credit Card" value={creditCard} onChange={(e) => {setCreditCard(e.target.value)}}>
                <option value="">--Please choose an option--</option>
                <option value='Discover It'> Disccover It </option>
                <option value='BOA 321'> BOA 321 </option>
            </select>
        </div>
        <div className="text">
            <label className="label"> Approved Date: </label>
            <input type="text" className="topInput" name="Add Approved Date" placeholder="MM/DD/YYYY" value={approveDate} onChange={(e) => {setApproveDate(e.target.value)}} pattern='^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$' title='Date Must be in the format MM/DD/YYYY' />
        </div>
        <div>
            <button id='cardInputBtn'> <h2> Add Credit Card </h2> </button>
        </div>
    </form>
  )
}

export default CardInput
