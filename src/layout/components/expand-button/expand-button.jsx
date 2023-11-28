import './expand-button.css'
// import expandIcon from '../../../assets/icons/expand.svg'
import { animateScroll } from '../../../utils/animation'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

export function ExpandButton ({ reff, duration = 2000, colorBtn = 'red', backgroundVisible = false }) {
  const [colorClass, setColorClass] = useState('')
  const [colorClassSVG, setColorClassSVG] = useState('')

  const handleClick = () => {
    const targetElement = document.querySelector(reff)
    if (targetElement) {
      animateScroll(targetElement, duration)
    }
  }

  useEffect(() => {
    let colorClass = ''
    if (colorBtn === 'green') {
      colorClass = 'expandbutton-green'
      setColorClass(colorClass)
      setColorClassSVG('expandbutton__Icon-green')
    } else if (colorBtn === 'blue') {
      colorClass = 'expandbutton-blue'
      setColorClass(colorClass)
      setColorClassSVG('expandbutton__Icon-blue')
    } else {
      colorClass = 'expandbutton-red'
      setColorClass(colorClass)
      setColorClassSVG('expandbutton__Icon-red')
    }

    if (backgroundVisible) {
      colorClass = colorClass + ' expandbutton-background'
      setColorClass(colorClass)
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
  colorBtn: PropTypes.oneOf(['red', 'blue', 'green']),
  backgroundVisible: PropTypes.bool
}
