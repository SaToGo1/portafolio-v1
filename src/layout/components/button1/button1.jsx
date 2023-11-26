import { useEffect, useState } from 'react'
import './button1.css'
import PropTypes from 'prop-types'

export function Button1 ({ name, reff, colorBtn = 'red' }) {
  const [colorClass, setColorClass] = useState('')
  useEffect(() => {
    if (colorBtn === 'green') {
      setColorClass('button1__a-green')
    } else if (colorBtn === 'blue') {
      setColorClass('button1__a-blue')
    } else {
      setColorClass('button1__a-red')
    }
  // eslint-disable-next-line
  }, [colorBtn])

  return (
    <a className={`button1__a ${colorClass}`} href={reff}>{name}</a>
  )
}

Button1.propTypes = {
  name: PropTypes.string,
  reff: PropTypes.string,
  colorBtn: PropTypes.oneOf(['red', 'blue', 'green'])
}
