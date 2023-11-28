import './header.css'
import { useHeaderActiveOnScroll } from '../../custom-hook/useHeaderActiveOnScroll'

export function Header () {
  useHeaderActiveOnScroll()

  return (
    <header className='header-animation'>
      <nav>
        <ul className='navList'>
          <li className='navList__li'><a className='header__in-section navList__a' href='#home' id='header-home'>Home</a></li>
          <li className='navList__li'><a className='navList__a' href='#aboutMe' id='header-about'>About</a></li>
          <li className='navList__li'><a className='navList__a' href='#projects' id='header-proj'>Projects</a></li>
          <li className='navList__li'><a className='navList__a' href='#contact' id='header-contact'>Contact</a></li>
          {/* <li>Resume</li> */}
        </ul>
      </nav>
    </header>
  )
}
