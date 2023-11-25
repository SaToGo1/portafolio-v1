import './header.css'
import { useHeaderActiveOnScroll } from '../../custom-hook/useHeaderActiveOnScroll'

export function Header () {
  useHeaderActiveOnScroll()

  return (
    <header className='header-animation'>
      <nav>
        <ul className='navList'>
          <li><a className='header__in-section' href='#home' id='header-home'>Home</a></li>
          <li><a href='#aboutMe' id='header-about'>About</a></li>
          <li><a href='#projects' id='header-proj'>Projects</a></li>
          <li><a href='#contact' id='header-contact'>Contact</a></li>
          {/* <li>Resume</li> */}
        </ul>
      </nav>
    </header>
  )
}
