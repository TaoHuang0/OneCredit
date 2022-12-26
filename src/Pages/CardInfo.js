import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

export default class cardInfo extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form id='cardinfoForm'>
          <div className='cardinfo'>
            <input
              className='cardinfoInput'
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              pattern='^[0-9]{16}$'
              title='Card Number Must be 16 Digits'
            />
            <input
              className='cardinfoInput'
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              pattern='^[A-Z][a-z]+[ ][A-Z][a-z]+$'
              title='Put Card Holder Name Here'
            />
            <input
              className='cardinfoInput'
              type="text"
              name="expiry"
              placeholder="MM/YY"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              pattern='^[0-9]{2}/2[0-9]$'
              title='Expire Date Must be In Format MM/YY'
            />
            <input
              className='cardinfoInput'
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              pattern='^[0-9]{3}[0-9]?$'
              title='CVC Must be In 3 - 4 Digits'
            />
          </div>
          <div>
            <button id='cardInputBtn'> <h2> Add My Card Information </h2> </button>
          </div>
        </form>
      </div>
    );
  }
}
