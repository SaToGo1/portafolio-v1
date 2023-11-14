import './project.css'
import { ProjectCard } from './project-card'

export function Project () {
  return (
    <section className='project' id='projects'>
      <h2>Projects</h2>
      <div className='projectDiv'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  )
}
