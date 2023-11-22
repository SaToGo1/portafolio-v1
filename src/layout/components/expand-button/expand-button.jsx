import './expand-button.css'
import expandIcon from '../../../assets/icons/expand.svg'

export function ExpandButton ({ reff }) {
  return (
    <button className='expandbutton'>
      <a href={reff} className='expandbutton__a'>
        <img src={expandIcon} className='expandbutton__Icon' />
      </a>
    </button>
  )
}
