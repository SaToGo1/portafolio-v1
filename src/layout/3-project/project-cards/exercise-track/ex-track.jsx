import '../project-card.css'
import exTrackImg from '../../../../assets/images/ex-track-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'
import { Button1 } from '../../../components/button1/button1'

export function ExTrack () {
  return (
    <article className='projectCard__Container'>
      <div className='projectCard'>
        <img src={exTrackImg} />
        <div className='projectCard__divText red-border-top'>
          <h2>Exercise Tracker</h2>
          <ProjectStack techArray={techArray} />
          <p className='projectCard__p'><span className='color-red projectCard__marginTop'>2023</span></p>
          <p className='projectCard__p projectCard__marginTop'>
            <span className='color-red'>API Development</span> to track Exercises.
          </p>
          <p className='projectCard__p'>
            Create users, add exercises by user and date,
            query by user to view all exercises, or query based on date and exercise limit.
          </p>
          <div className='projectCard__buttonsDiv projectCard__marginTop'>
            <Button1 name='Live Demo' reff='https://project-exercisetracker.satogo.repl.co/' colorBtn='red' />
            <Button1 name='Code' reff='https://github.com/SaToGo1/project-exercisetracker' colorBtn='red' />
          </div>
        </div>
      </div>
    </article>
  )
}

const techArray = [
  {
    class: 'devicon-nodejs-plain colored', // Nodejs
    name: ''
  },
  {
    class: 'devicon-mongodb-plain colored', // MongoDB
    name: ''
  },
  {
    class: 'devicon-express-original', // Express
    name: ''
  },
  {
    class: 'devicon-javascript-plain colored', // Js
    name: ''
  },
  {
    class: 'devicon-html5-plain colored', // HTML
    name: ''
  },
  {
    class: 'devicon-css3-plain colored', // CSS
    name: ''
  }
]
