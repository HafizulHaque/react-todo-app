import propTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
  const click = (e) => {
    console.log('button clicked')
    console.log(e)
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={click}/>
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
