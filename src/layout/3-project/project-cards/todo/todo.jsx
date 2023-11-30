// The order of import of the CSS is important for the code
// Don't change it 1st project-card.css 2nd todo.css
import '../project-card.css'
import './todo.css'

import todoImg from '../../../../assets/images/todo-mobile.png'
import { ProjectStack } from '../../../components/stack-project/project-stack'
import { BtnProj } from '../../../components/button-project/button-project'
import { ExpandButton } from '../../../components/expand-button/expand-button'
// import { useEffect } from 'react'

export function Todo () {
  // useEffect(() => {
  //   let element = document.querySelector('.todo__animation');

  //   element.addEventListener('animationend', () => {
  //     element.classList.remove('todo__animation')
  //   })
  // }, [])
  return (
    <article className='projectCard__Container' id='proj-todo'>
      <div className='projectCard todo__projCard'>
        <img className='projectCard__img' src={todoImg} />
        <div className='projectCard__divText green-border-top todo__divText right__animation'>
          <h2 className='projectCard__divText-h2'>To-Do List</h2>
          <ProjectStack techArray={techArray} />
          <p className='projectCard__marginTop projectCard__p'><span className='color-green'>2023</span></p>
          <p className='projectCard__marginTop projectCard__p'>
            Web application for task management <span className='color-green'>built with MVC architecture</span>.
          </p>
          <p className='projectCard__p'>
            Creates projects,
            categorizes projects by color, organizes tasks by day, week, and month,
            and open details of every task to add specific information for them.
          </p>
          <div className='projectCard__buttonsDiv projectCard__marginTop'>
            <BtnProj name='Live' reff='https://satogo1.github.io/todo-list-version2/' colorBtn='green'>
              <svg xmlns='http://www.w3.org/2000/svg' className='projectCard__SVG' viewBox='0 0 448 512'>
                <path d='M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
              </svg>
            </BtnProj>
            <BtnProj name='Code' reff='https://github.com/SaToGo1/todo-list-version2' colorBtn='green'>
              <svg xmlns='http://www.w3.org/2000/svg' className='projectCard__SVG' viewBox='0 0 640 512'>
                <path d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z' />
              </svg>
            </BtnProj>
          </div>
        </div>
      </div>
      <div className='projectCard__expandButton'>
        <ExpandButton reff='#proj-store' colorBtn='green' duration={1600} backgroundVisible />
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
