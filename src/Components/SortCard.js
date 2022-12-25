import React from 'react'
import '../App.css'
import Discover from '../Images/Discover.png'
import Boa321 from '../Images/boa321.png'

const SortCard = ( { creditCard } ) => {
  let url = ''
  if(creditCard.type === 'Discover It') url = 'https://www.uscreditcardguide.com/discover-it-credit-card/'
  if(creditCard.type === 'BOA 321') url = 'https://www.uscreditcardguide.com/boa-cash-rewards-credit-card/'

  return (
    <div className='sortCard'>
      <div className='sortImage'>
        {creditCard.type === 'Discover It' ? <img src={Discover} alt='Discover It' width={250} height={150} /> : ''}
        {creditCard.type === 'BOA 321' ? <img src={Boa321} alt='Discover It' width={250} height={150} /> : ''}
        <button id='learnmoreBtn' onClick={() => {window.open(url, '_blank', 'noopener,noreferrer')}}> Learn more </button>
      </div>
      <div className='sortBody'>
        <h2> {creditCard.type} </h2>
        <div>
          <label id='sortBodyLabel'><b> At a glance </b></label>
          <p> Grocery Shopping Benefits: {creditCard.groceryBenifit}% cashback on grocery purchases (Exclude Walmart, Target, and Wholesale Clubs)</p>
          <p> Online Shopping Benefits: {creditCard.onlineBenifit}% cashback on online shopping purchases</p>
          <p> Travel Benefits: {creditCard.travelBenifit}% cashback on travel purchases, e.g. flight, rental car, hotel</p>
        </div>
      </div>
    </div>
  )
}

export default SortCard
