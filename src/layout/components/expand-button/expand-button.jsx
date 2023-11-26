import './expand-button.css'
import expandIcon from '../../../assets/icons/expand.svg'
import { animateScroll } from '../../../utils/animation'
import PropTypes from 'prop-types'

export function ExpandButton ({ reff }) {
  const handleClick = () => {
    const targetElement = document.querySelector(reff)
    if (targetElement) {
      const duration = 2000

      animateScroll(targetElement, duration)
    }
  }

  return (
    <button className='expandbutton' onClick={handleClick} alt='next section'>
      {/* <a href={reff} className='expandbutton'> */}
      <img src={expandIcon} className='expandbutton__Icon' />
      {/* </a> */}
    </button>
  )
}

ExpandButton.propTypes = {
  reff: PropTypes.string
}
