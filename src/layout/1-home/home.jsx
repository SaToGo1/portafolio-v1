import './home.css'
import { ExpandButton } from '../components/expand-button/expand-button'

export function Home () {
  return (
    <section className='home' id='home'>
      <div className='home__titleDiv'>
        <h1>Santiago Toledano</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className='home__buttonContainer'>
        <ExpandButton reff='#aboutMe' />
      </div>
    </section>
  )
}
