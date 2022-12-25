import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CardInput = ( { onAdd } ) => {
    const [creditCard, setCreditCard] = useState('')
    const [approveDate, setApproveDate] = useState('')
    const [groceryBenifit, setGroceryBenifit] = useState('')
    const [onlineBenifit, setOnlineBenifit] = useState('')
    const [travelBenifit, setTravelBenifit] = useState('')

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }

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

        if(!groceryBenifit){
            alert("No Grocery Benifit Input, 0% please put '0'")
            return
        }

        if(!onlineBenifit){
            alert("No Online Benifit Input, 0% please put '0'")
            return
        }

        if(!travelBenifit){
            alert("No Travel Benifit Input, 0% please put '0'")
            return
        }

        onAdd( { type: creditCard, approveDate: approveDate, groceryBenifit: groceryBenifit, onlineBenifit: onlineBenifit, travelBenifit: travelBenifit } )
        setCreditCard('')
        setApproveDate('')
        setGroceryBenifit('')
        setOnlineBenifit('')
        setTravelBenifit('')
        routeChange()

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
        <div className="text">
            <label className='label'> Grocery earning: </label>
            <input type="text" className="topInput" name="Add Percentage Here" placeholder="Add Percentage Here, e.g. 3" value={groceryBenifit} onChange={(e) => {setGroceryBenifit(e.target.value)}} pattern='^[0-9]' title='Input must be a number' />
        </div>
        <div className="text">
            <label className='label'> Online Shopping earning: </label>
            <input type="text" className="topInput" name="Add Percentage Here" placeholder="Add Percentage Here, e.g. 3" value={onlineBenifit} onChange={(e) => {setOnlineBenifit(e.target.value)}} pattern='^[0-9]' title='Input must be a number' />
        </div>
        <div className="text">
            <label className='label'> Travel earning: </label>
            <input type="text" className="topInput" name="Add Percentage Here" placeholder="Add Percentage Here, e.g. 3" value={travelBenifit} onChange={(e) => {setTravelBenifit(e.target.value)}} pattern='^[0-9]' title='Input must be a number' />
        </div>
        <div>
        <button id='cardInputBtn'> <h2> Add Credit Card </h2> </button>
        </div>
    </form>
  )
}

export default CardInput
