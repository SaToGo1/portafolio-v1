import '../project-card.css'
import exTrackImg from '../../../../assets/images/ex-track-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'

export function ExTrack () {
  return (
    <article className='projectCard__Container'>
      <div className='projectCard'>
        <img src={exTrackImg} />
        <div className='projectCard__divText red-border-top'>
          <h2>Exercise Tracker</h2>
          <ProjectStack techArray={techArray} />
          <p><span className='color-red'>2023</span></p>
          <p>
            <span className='color-red'>API Development</span> to track Exercises. Create users, add exercises by user and date,
            query by user to view all exercises, or query based on date and exercise limit.
          </p>
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
    class: 'devicon-express-original colored', // Express
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
