import './expand-button.css'
import expandIcon from '../../assets/icons/expand.svg'

export function ExpandButton () {
  return (
    <button className='expandbutton'>
      <a href='#aboutMe' className='expandbutton__a'>
        <img src={expandIcon} className='expandbutton__Icon' />
      </a>
    </button>
  )
}
