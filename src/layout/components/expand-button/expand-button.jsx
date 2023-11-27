import './expand-button.css'
import expandIcon from '../../../assets/icons/expand.svg'
import { animateScroll } from '../../../utils/animation'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

export function ExpandButton ({ reff, duration = 2000, colorBtn = 'red' }) {
  const [colorClass, setColorClass] = useState('')
  const [colorClassSVG, setColorClassSVG] = useState('')

  const handleClick = () => {
    const targetElement = document.querySelector(reff)
    if (targetElement) {
      animateScroll(targetElement, duration)
    }
  }

  useEffect(() => {
    if (colorBtn === 'green') {
      setColorClass('expandbutton-green')
      setColorClassSVG('expandbutton__Icon-green')
    } else if (colorBtn === 'blue') {
      setColorClass('expandbutton-blue')
      setColorClassSVG('expandbutton__Icon-blue')
    } else {
      setColorClass('expandbutton-red')
      setColorClassSVG('expandbutton__Icon-red')
    }
  // eslint-disable-next-line
  }, [colorBtn])

  return (
    <button className={`expandbutton ${colorClass}`} onClick={handleClick} alt='next section'>
      {/* <a href={reff} className='expandbutton'> */}
      <img src={expandIcon} className={`expandbutton__Icon ${colorClassSVG}`} />
      {/* </a> */}
    </button>
  )
}

ExpandButton.propTypes = {
  reff: PropTypes.string,
  duration: PropTypes.number,
  colorBtn: PropTypes.oneOf(['red', 'blue', 'green'])
}
