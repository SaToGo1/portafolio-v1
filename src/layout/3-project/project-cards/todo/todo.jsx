import '../project-card.css'
import todoImg from '../../../../assets/images/todo-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'
import { Button1 } from '../../../components/button1/button1'

export function Todo () {
  return (
    <article className='projectCard__Container'>
      <div className='projectCard'>
        <img src={todoImg} />
        <div className='projectCard__divText green-border-top'>
          <h2>To-Do List</h2>
          <ProjectStack techArray={techArray} />
          <p className='projectCard__marginTop projectCard__p'><span className='color-green'>2023</span></p>
          <p className='projectCard__marginTop projectCard__p'>
            Web application for task management <span className='color-green'>built with MVC architecture</span>.
          </p>
          <p className='projectCard__p'>
            Creates projects,
            categorizes projects by color, organizes tasks by day, week, and month,
            open details of every task to add specific information for them.
          </p>
          <div className='projectCard__buttonsDiv projectCard__marginTop'>
            <Button1 name='Live Demo' reff='https://satogo1.github.io/todo-list-version2/' colorBtn='green' />
            <Button1 name='Code' reff='https://github.com/SaToGo1/todo-list-version2' colorBtn='green' />
          </div>
        </div>
      </div>
    </article>
  )
}

const techArray = [
  {
    class: 'devicon-javascript-plain colored',
    name: ''
  },
  {
    class: 'devicon-html5-plain colored',
    name: ''
  },
  {
    class: 'devicon-css3-plain colored',
    name: ''
  },
  {
    class: '',
    name: 'Vite'
  }
]
