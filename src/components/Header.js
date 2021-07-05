import propTypes from 'prop-types'
import Button from './Button'

function Header({ title, onAddClick, showAddTask }) {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button 
        color={showAddTask ? 'red' : 'green'} 
        text= {showAddTask ? 'Close' : `Add`} 
        onClick={onAddClick}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Default Title',
}

Header.propTypes = {
  title: propTypes.string.isRequired
}

export default Header
