import './project.css'
import { ProjectCard } from './project-card'
import { Todo } from './project-cards/todo/todo'

export function Project () {
  return (
    <section className='project' id='projects'>
      <h2 className='project__sectionTitle'>Projects</h2>
      <div className='project__div'>
        <Todo />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
