import React from 'react'
import '../App.css'
import { FaTimes } from 'react-icons/fa'
import Phone from '../Images/phone.png'
import Doc from '../Images/docicon.png'
import Discover from '../Images/Discover.png'
import Boa321 from '../Images/boa321.png'

const Card = ( { creditCard, type, approveDate, onDelete  } ) => {
    const csNumber = () => {
        if(type === 'Discover It'){
            alert('Call 1-800-DISCOVER (1-800-347-2683)')
        }else if(type === 'BOA 321'){
            alert('Call 1 (800) 432-1000')
        }
    }

    let url = ''
    if(type === 'Discover It') url = 'https://www.uscreditcardguide.com/discover-it-credit-card/'
    if(type === 'BOA 321') url = 'https://www.uscreditcardguide.com/boa-cash-rewards-credit-card/'

  return (
    <div className='card'>
        <div className='image'>
            <div>
                {type === 'Discover It' ? <img src={Discover} alt='Discover It' width={250} height={150} /> : ''}
                {type === 'BOA 321' ? <img src={Boa321} alt='Discover It' width={250} height={150} /> : ''}
            </div>
            <div className='icon'>
                <img src={Phone} alt='Credit Card Company Phone Number' width={30} height={30} onClick={csNumber} />
            </div>
            <div className='icon'>
            <img src={Doc} alt='Credit Card Benifit Description' width={30} height={30} onClick={() => {window.open(url, '_blank', 'noopener,noreferrer')}} />
            </div>
        </div>
        <div>
            <h3> {type} </h3>
        </div>
        <div id='app-del'>
            <h3> {approveDate} </h3>
            <FaTimes className='deleteCard'
            style={{ color: 'red', cursor: 'pointer', marginLeft: '2em'}}
            onClick={ () => onDelete(creditCard.id) }
            />
        </div>
    </div>
  )
}

export default Card
