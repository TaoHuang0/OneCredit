import PropTypes from 'prop-types'
import Button from './Button'

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
