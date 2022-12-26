import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header className='headTask'>
        <h1>Credit Card Management Organizor</h1>
        </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
