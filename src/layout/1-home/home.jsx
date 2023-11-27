import './home.css'
import { ExpandButton } from '../components/expand-button/expand-button'
import { useEffect } from 'react'

export function Home () {
  // ::after animation gives problems if buttonDiv has button-animation class
  // so after the button appears this delete the class
  useEffect(() => {
    setTimeout(() => {
      const buttonContainer = document.querySelector('.home__buttonContainer')
      buttonContainer.classList.remove('home__button-animation')
    }, 3200)
  }, [])

  return (
    <section className='home' id='home'>
      <div className='home__titleDiv'>
        <h1 className='home__h1-animation'>Santiago Toledano</h1>
        <h2 className='home__h2-animation'>Full Stack Web Developer</h2>
      </div>
      <div className='home__buttonContainer home__button-animation'>
        <ExpandButton reff='#aboutMe' duration={1000} />
      </div>
    </section>
  )
}
