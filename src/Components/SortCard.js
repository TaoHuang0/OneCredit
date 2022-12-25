import React from 'react'
import '../App.css'
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

const SortCard = ( { creditCard } ) => {
  let url = ''
  if(creditCard.type === 'Discover It') url = 'https://www.uscreditcardguide.com/discover-it-credit-card/'
  if(creditCard.type === 'BOA 321') url = 'https://www.uscreditcardguide.com/boa-cash-rewards-credit-card/'
  if(creditCard.type === 'CHASE FREEDOM UNLIMITED') url = 'https://www.uscreditcardguide.com/chase-freedom-unlimited-credit-card/'
  if(creditCard.type === 'CHASE FREEDOM FLEX') url = 'https://www.uscreditcardguide.com/chase-freedom-flex-credit-card/'
  if(creditCard.type === 'CHASE SAPPHIRE PREFERRED') url = 'https://www.uscreditcardguide.com/chase-sapphire-preferred-credit-card/'
  if(creditCard.type === 'SOUTHWEST RAPID REWARDS® PLUS') url = 'https://www.uscreditcardguide.com/chase-southwest-plus-credit-card/'
  if(creditCard.type === 'MARRIOTT BONVOY BOUNDLESS®') url = 'https://www.uscreditcardguide.com/chase-marriott-premier-plus-credit-card/'
  if(creditCard.type === 'UNITED EXPLORER') url = 'https://www.uscreditcardguide.com/chase-united-mileageplus-explorer-credit-card/'
  if(creditCard.type === 'American Express® Gold Card') url = 'https://www.uscreditcardguide.com/amex-premier-rewards-gold-card/'
  if(creditCard.type === 'Blue Cash Preferred® Card') url = 'https://www.uscreditcardguide.com/blue-cash-preferred-credit-card/'
  if(creditCard.type === 'American Express Platinum Card') url = 'https://www.uscreditcardguide.com/amex-platinum-card/'
  if(creditCard.type === 'Delta SkyMiles® Gold American Express Card') url = 'https://www.uscreditcardguide.com/amex-gold-delta-skymiles-credit-card/'
  if(creditCard.type === 'Citi Custom Cash Card') url = 'https://www.uscreditcardguide.com/citi-custom-cash-credit-card/'
  if(creditCard.type === 'Citi Premier® Credit Card') url = 'https://www.uscreditcardguide.com/citi-thankyou-premier-credit-card/'

  return (
    <div className='sortCard'>
      <div className='sortImage'>
        {creditCard.type === 'Discover It' ? <img src={Discover} alt='Discover It' width={250} height={150} /> : ''}
        {creditCard.type === 'BOA 321' ? <img src={Boa321} alt='Discover It' width={250} height={150} /> : ''}
        {creditCard.type === 'CHASE FREEDOM UNLIMITED' ? <img src={Cfu} alt='CHASE FREEDOM UNLIMITED' width={250} height={150} /> : ''}
        {creditCard.type === 'CHASE FREEDOM FLEX' ? <img src={Cff} alt='CHASE FREEDOM FLEX' width={250} height={150} /> : ''}
        {creditCard.type === 'CHASE SAPPHIRE PREFERRED' ? <img src={Csp} alt='CHASE SAPPHIRE PREFERRED' width={250} height={150} /> : ''}
        {creditCard.type === 'SOUTHWEST RAPID REWARDS® PLUS' ? <img src={Swa} alt='SOUTHWEST RAPID REWARDS® PLUS' width={250} height={150} /> : ''}
        {creditCard.type === 'MARRIOTT BONVOY BOUNDLESS®' ? <img src={Mbb} alt='MARRIOTT BONVOY BOUNDLESS®' width={250} height={150} /> : ''}
        {creditCard.type === 'UNITED EXPLORER' ? <img src={Ue} alt='UNITED EXPLORER' width={250} height={150} /> : ''}
        {creditCard.type === 'American Express® Gold Card' ? <img src={Ag} alt='American Express® Gold Card' width={250} height={150} /> : ''}
        {creditCard.type === 'Blue Cash Preferred® Card' ? <img src={Abcp} alt='Blue Cash Preferred® Card' width={250} height={150} /> : ''}
        {creditCard.type === 'American Express Platinum Card' ? <img src={Aplat} alt='American Express Platinum Card' width={250} height={150} /> : ''}
        {creditCard.type === 'Delta SkyMiles® Gold American Express Card' ? <img src={Adg} alt='Delta SkyMiles® Gold American Express Card' width={250} height={150} /> : ''}
        {creditCard.type === 'Citi Custom Cash Card' ? <img src={Ccc} alt='Citi Custom Cash Card' width={250} height={150} /> : ''}
        {creditCard.type === 'Citi Premier® Credit Card' ? <img src={Cp} alt='Citi Premier® Credit Card' width={250} height={150} /> : ''}
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
