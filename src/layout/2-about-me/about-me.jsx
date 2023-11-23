import './about-me.css'
import { ExpandButton } from '../components/expand-button/expand-button'
import { ContactIcons } from '../components/contact-icons/contact-icons'
import { Stack } from '../components/stack/stack'

export function AboutMe () {
  return (
    <section className='aboutMe' id='aboutMe'>
      <div className='aboutMe__background' />
      <div className='aboutMe__container'>
        <div className='aboutMe__description'>
          <h2>About Me</h2>
          <p>Hello! I'm Santiago, a Web Developer interested in <span className='color-red'>Fullstack web applications</span> and software development. </p>
          <p>I'm currently pursuing a <span className='color-red'>Computer Science degree </span> at the Autonomous University of Barcelona. </p>
          <p>I love to <span className='color-red'>face new challenges and learn from them</span>. I'm always seeking for new opportunities to improve myself and my skills.</p>
          <div className='aboutMe__icons'>
            <ContactIcons />
          </div>
          {/* <div className='aboutMe__buttonContainer'>
            <ExpandButton reff='#projects' />
          </div> */}
        </div>
        <div className='aboutMe__Stack'>
          <Stack />
        </div>
      </div>
    </section>
  )
}
