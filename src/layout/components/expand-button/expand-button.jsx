import './expand-button.css'
import expandIcon from '../../../assets/icons/expand.svg'
import { animateScroll } from '../../../utils/animation'

export function ExpandButton ({ reff }) {
  const handleClick = () => {
    const targetElement = document.querySelector(reff)
    if (targetElement) {
      const duration = 3000

      animateScroll(targetElement, duration)
    }
  }

  return (
    <button className='expandbutton' onClick={handleClick}>
      {/* <a href={reff} className='expandbutton'> */}
      <img src={expandIcon} className='expandbutton__Icon' />
      {/* </a> */}
    </button>
  )
}
