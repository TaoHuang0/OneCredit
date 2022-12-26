import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Phone from '../Images/phone.png'
import Doc from '../Images/docicon.png'
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


const Card = ( { creditCard, type, approveDate, onDelete  } ) => {
    const csNumber = () => {
        if(type === 'Discover It'){
            alert('Call 1-800-347-2683')
        }else if(type === 'BOA 321'){
            alert('Call 1-800-432-1000')
        }else if(type === 'CHASE FREEDOM UNLIMITED' || type === 'CHASE FREEDOM FLEX' || type === 'CHASE SAPPHIRE PREFERRED'
                 || type === 'SOUTHWEST RAPID REWARDS® PLUS' || type === 'MARRIOTT BONVOY BOUNDLESS®' || type === 'UNITED EXPLORER'){
            alert('Call 1-800-432-3117')
        }else if(type === 'American Express® Gold Card' || type === 'Blue Cash Preferred® Card' || type === 'American Express Platinum Card'
                 || type === 'Delta SkyMiles® Gold American Express Card'){
            alert('Call 1-800-528-4800')
        }else if(type === 'Citi Custom Cash Card' || type === 'Citi Premier® Credit Card'){
            alert('Call 1-888-248-4226')
        }
    }

    const fees = {
        "Discover It": 0,
        "BOA 321": 0,
        "CHASE FREEDOM UNLIMITED": 0,
        "CHASE FREEDOM FLEX": 0,
        "CHASE SAPPHIRE PREFERRED": 95 + ", First Year Free",
        "SOUTHWEST RAPID REWARDS® PLUS": 69,
        "MARRIOTT BONVOY BOUNDLESS®": 95,
        "UNITED EXPLORER": 95,
        "American Express® Gold Card": 250,
        "Blue Cash Preferred® Card": 95 + ", First Year Free",
        "American Express Platinum Card": 695,
        "Delta SkyMiles® Gold American Express Card": 99 + ", First Year Free",
        "Citi Custom Cash Card": 0,
        "Citi Premier® Credit Card": 95 + ", First Year Free"
    }
    const map = new Map(Object.entries(fees));

    let url = ''
    if(type === 'Discover It') url = 'https://www.uscreditcardguide.com/discover-it-credit-card/'
    if(type === 'BOA 321') url = 'https://www.uscreditcardguide.com/boa-cash-rewards-credit-card/'
    if(type === 'CHASE FREEDOM UNLIMITED') url = 'https://www.uscreditcardguide.com/chase-freedom-unlimited-credit-card/'
    if(type === 'CHASE FREEDOM FLEX') url = 'https://www.uscreditcardguide.com/chase-freedom-flex-credit-card/'
    if(type === 'CHASE SAPPHIRE PREFERRED') url = 'https://www.uscreditcardguide.com/chase-sapphire-preferred-credit-card/'
    if(type === 'SOUTHWEST RAPID REWARDS® PLUS') url = 'https://www.uscreditcardguide.com/chase-southwest-plus-credit-card/'
    if(type === 'MARRIOTT BONVOY BOUNDLESS®') url = 'https://www.uscreditcardguide.com/chase-marriott-premier-plus-credit-card/'
    if(type === 'UNITED EXPLORER') url = 'https://www.uscreditcardguide.com/chase-united-mileageplus-explorer-credit-card/'
    if(type === 'American Express® Gold Card') url = 'https://www.uscreditcardguide.com/amex-premier-rewards-gold-card/'
    if(type === 'Blue Cash Preferred® Card') url = 'https://www.uscreditcardguide.com/blue-cash-preferred-credit-card/'
    if(type === 'American Express Platinum Card') url = 'https://www.uscreditcardguide.com/amex-platinum-card/'
    if(type === 'Delta SkyMiles® Gold American Express Card') url = 'https://www.uscreditcardguide.com/amex-gold-delta-skymiles-credit-card/'
    if(type === 'Citi Custom Cash Card') url = 'https://www.uscreditcardguide.com/citi-custom-cash-credit-card/'
    if(type === 'Citi Premier® Credit Card') url = 'https://www.uscreditcardguide.com/citi-thankyou-premier-credit-card/'

  return (
    <div className='card'>
        <div className='image'>
            <div>
            <Link to='/cardInfo'>
                {type === 'Discover It' ? <img src={Discover} alt='Discover It' width={250} height={150} /> : ''}
                {type === 'BOA 321' ? <img src={Boa321} alt='BOA 321' width={250} height={150} /> : ''}
                {type === 'CHASE FREEDOM UNLIMITED' ? <img src={Cfu} alt='CHASE FREEDOM UNLIMITED' width={250} height={150} /> : ''}
                {type === 'CHASE FREEDOM FLEX' ? <img src={Cff} alt='CHASE FREEDOM FLEX' width={250} height={150} /> : ''}
                {type === 'CHASE SAPPHIRE PREFERRED' ? <img src={Csp} alt='CHASE SAPPHIRE PREFERRED' width={250} height={150} /> : ''}
                {type === 'SOUTHWEST RAPID REWARDS® PLUS' ? <img src={Swa} alt='SOUTHWEST RAPID REWARDS® PLUS' width={250} height={150} /> : ''}
                {type === 'MARRIOTT BONVOY BOUNDLESS®' ? <img src={Mbb} alt='MARRIOTT BONVOY BOUNDLESS®' width={250} height={150} /> : ''}
                {type === 'UNITED EXPLORER' ? <img src={Ue} alt='UNITED EXPLORER' width={250} height={150} /> : ''}
                {type === 'American Express® Gold Card' ? <img src={Ag} alt='American Express® Gold Card' width={250} height={150} /> : ''}
                {type === 'Blue Cash Preferred® Card' ? <img src={Abcp} alt='Blue Cash Preferred® Card' width={250} height={150} /> : ''}
                {type === 'American Express Platinum Card' ? <img src={Aplat} alt='American Express Platinum Card' width={250} height={150} /> : ''}
                {type === 'Delta SkyMiles® Gold American Express Card' ? <img src={Adg} alt='Delta SkyMiles® Gold American Express Card' width={250} height={150} /> : ''}
                {type === 'Citi Custom Cash Card' ? <img src={Ccc} alt='Citi Custom Cash Card' width={250} height={150} /> : ''}
                {type === 'Citi Premier® Credit Card' ? <img src={Cp} alt='Citi Premier® Credit Card' width={250} height={150} /> : ''}
            </Link>
            </div>
            <div className='icon'>
                <img src={Phone} alt='Credit Card Company Phone Number' width={30} height={30} onClick={csNumber} />
            </div>
            <div className='icon'>
            <img src={Doc} alt='Credit Card Benifit Description' width={30} height={30} onClick={() => {window.open(url, '_blank', 'noopener,noreferrer')}} />
            </div>
        </div>
        <div className='annualFee'>
            <h3> {type} </h3>
            <h4> {map.get(type) === 0 ? 'No Annual Fee' : 'Annual Fee: $' + map.get(type)} </h4>

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
