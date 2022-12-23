import React from 'react'
import '../App.css'
import { FaTimes } from 'react-icons/fa'
import Phone from '../Images/phone.png'
import Doc from '../Images/docicon.png'
import Discover from '../Images/Discover.png'
import Boa321 from '../Images/boa321.png'

const Card = ( { creditCard, type, approveDate, onDelete  } ) => {
  return (
    <div className='card'>
        <div className='image'>
            <div>
                {type === 'Discover It' ? <img src={Discover} alt='Discover It' width={250} height={150} /> : ''}
                {type === 'BOA 321' ? <img src={Boa321} alt='Discover It' width={250} height={150} /> : ''}
            </div>
            <div className='icon'>
                <img src={Phone} alt='Credit Card Company Phone Number' width={30} height={30} />
            </div>
            <div className='icon'>
            <img src={Doc} alt='Credit Card Company Phone Number' width={30} height={30} />
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
