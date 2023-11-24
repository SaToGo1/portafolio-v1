import './todo.css'
import todoImg from '../../../../assets/images/todo-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'

export function Todo () {
  return (
    <article className='todoContainer'>
      <div className='todo'>
        <img src={todoImg} />
        <div className='todo__divText'>
          <h2>To-Do List</h2>
          <ProjectStack techArray={techArray} />
          <p>this is a description</p>
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
