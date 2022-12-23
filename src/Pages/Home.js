import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from '../Components/Card'
import CardInput from './CardInput';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

const Home = ( { creditCards } ) => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/cardinput`; 
    navigate(path);
  }
  
  return (
    <div id='creditCards'>
      <nav>
        <h3 id='a1'> Card Design </h3>
        <h3> Credit Card </h3>
        <h3> Approved Date </h3>
      </nav>
      <div className='cards'>
        {creditCards.map((creditCard) => (
          <Card key={creditCard.id} type={creditCard.type} approveDate={creditCard.approveDate} />
        ))}
      </div>
      <button className='btn' onClick={routeChange} > <h3> Add New Credit Card </h3> </button>
    </div>
  )
}

export default Home
