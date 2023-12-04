import './about-me.css'
import { ContactIcons } from '../components/contact-icons/contact-icons'
import { Stack } from '../components/stack/stack'
import { ExpandButton } from '../components/expand-button/expand-button'

export function AboutMe () {
  return (
    <section className='aboutMe' id='aboutMe'>
      <div className='aboutMe__background' />
      <div className='aboutMe__container'>
        <div className='aboutMe__description'>
          <h2 className='aboutMe__description-h2'>About Me</h2>
          <p className='aboutMe__description-p'>
            I am Santiago, Full Stack Developer currently pursuing a <span className='color-red'>Computer Science degree</span>.
          </p>
          <p className='aboutMe__description-p'>
            Passionate for facing new challenges and learning from them. Constantly seeking
            opportunities for improvement.
          </p>
          <p className='aboutMe__description-p'>
            I am disciplined, methodical, and a team player and <span className='color-red'>I love to build clean, simple and understandable code.</span>
          </p>
          <p className='aboutMe__description-p'>
            <br />I am seeking internship opportunities. My goal is to contribute to a team’s success, develop new skills, and grow professionally.
          </p>
          <div className='aboutMe__icons'>
            <ContactIcons />
          </div>
        </div>
        <div className='aboutMe__Stack'>
          <Stack />
        </div>
      </div>
      <div className='aboutMe__buttonContainer'>
        <ExpandButton reff='#proj-todo' duration={1600} />
      </div>
    </section>
  )
}
