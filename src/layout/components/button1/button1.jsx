import { useEffect } from 'react'
import './button1.css'
import PropTypes from 'prop-types'

let colorClass = 'button1__a-red'
export function Button1 ({ name, reff, color = 'red' }) {
  useEffect(() => {
    if (color === 'green') {
      colorClass = 'button1__a-green'
    } else if (color === 'blue') {
      colorClass = 'button1__a-blue'
    } else {
      colorClass = 'button1__a-red'
    }
  // eslint-disable-next-line
  }, [])

  return (
    <a className={`button1__a ${colorClass}`} href={reff}>{name}</a>
  )
}

Button1.propTypes = {
  name: PropTypes.string,
  reff: PropTypes.string,
  color: PropTypes.oneOf(['red', 'blue', 'green'])
}
