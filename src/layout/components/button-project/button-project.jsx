import { useEffect, useState } from 'react'
import './button-project.css'
import PropTypes from 'prop-types'

export function BtnProj ({ name, reff, colorBtn = 'red', children }) {
  const [colorClass, setColorClass] = useState('')
  useEffect(() => {
    if (colorBtn === 'green') {
      setColorClass('BtnProj__a-green')
    } else if (colorBtn === 'blue') {
      setColorClass('BtnProj__a-blue')
    } else {
      setColorClass('BtnProj__a-red')
    }
  // eslint-disable-next-line
  }, [colorBtn])

  return (
    <a className={`BtnProj__a ${colorClass}`} href={reff}>
      <p className='BtnProj__p'>{name}</p>
      {children}
    </a>
  )
}

BtnProj.propTypes = {
  name: PropTypes.string,
  reff: PropTypes.string,
  colorBtn: PropTypes.oneOf(['red', 'blue', 'green']),
  children: PropTypes.node
}
