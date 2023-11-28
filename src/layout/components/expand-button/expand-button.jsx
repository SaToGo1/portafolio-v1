import './expand-button.css'
// import expandIcon from '../../../assets/icons/expand.svg'
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
      {/* <img src={expandIcon} className={`expandbutton__Icon ${colorClassSVG}`} /> */}
      <svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24' className={`expandbutton__Icon ${colorClassSVG}`}>
        <path className='expandButton__path' d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' />
      </svg>
      {/* </a> */}
    </button>
  )
}

ExpandButton.propTypes = {
  reff: PropTypes.string,
  duration: PropTypes.number,
  colorBtn: PropTypes.oneOf(['red', 'blue', 'green'])
}
