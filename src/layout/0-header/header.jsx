import './header.css'

export function Header () {
  return (
    <header>
      <nav>
        <ul className='navList'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#aboutMe'>About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
          {/* <li>Resume</li> */}
        </ul>
      </nav>
    </header>
  )
}
