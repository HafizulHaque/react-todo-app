import propTypes from 'prop-types'

function Header({title}) {
  return (
    <header>
      <h1>{title}</h1>
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
