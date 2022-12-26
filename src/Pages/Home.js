import React from 'react'
import { useNavigate } from "react-router-dom";
import Card from '../Components/Card'

const Home = ( { creditCards, onDelete } ) => {
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
          <Card creditCard={creditCard} type={creditCard.type} approveDate={creditCard.approveDate}  onDelete={onDelete} />
        ))}
      </div>
      {creditCards.length === 0 ? <h2 id='emptyCard'>No Avaliable Credit Card</h2> : ''}
      <button className='btn' onClick={routeChange} > <h3> Add New Credit Card </h3> </button>
    </div>
  )
}

export default Home
