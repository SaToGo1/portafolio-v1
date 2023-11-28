import './project.css'
import { Todo } from './project-cards/todo/todo.jsx'
import { FakeStore } from './project-cards/fake-store/fake-store.jsx'
import { ExTrack } from './project-cards/exercise-track/ex-track'

export function Project () {
  return (
    <section className='project' id='projects'>
      <h2 className='project__sectionTitle'>Projects</h2>
      <div className='project__div'>
        <Todo />
        <FakeStore />
        <ExTrack />
        {/* PENDING MORE PROJECT BTN */}
      </div>
    </section>
  )
}
