import propTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='red' text='add me'/>
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
