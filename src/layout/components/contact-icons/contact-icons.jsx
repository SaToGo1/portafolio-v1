import './contact-icons.css'
import mailIco from '../../../assets/icons/mail.svg'

export function ContactIcons () {
  return (
    <div className='contactIcons__container'>
      <div className='contactIcons__div'>
        <a href='mailto:stoledano97@gmail.com'>
          <img src={mailIco} className='contactIcons__img contactIcons__icon' alt='mail' />
        </a>
      </div>
      <div className='contactIcons__div'>
        <a href='https://github.com/SaToGo1'>
          <i className='devicon-github-original-wordmark contactIcons__icon' alt='github' />
        </a>
      </div>
      <div className='contactIcons__div'>
        <a href='http://linkedin.com/in/satogo'>
          <i className='devicon-linkedin-plain-wordmark contactIcons__icon' alt='linkedIn' />
        </a>
      </div>
    </div>
  )
}
