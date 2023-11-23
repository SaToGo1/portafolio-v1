import './project-stack.css'
import { TechCard } from './tech-project-card'

export function ProjectStack ({ techArray }) {
  return (
    <div className='stackProjectContainer'>
      <h2>Stack</h2>
      <div className='stackProject'>
        {techArray.map((tech, i) => {
          return (
            <TechCard iconName={tech.class} name={tech.name} key={i} />
          )
        })}
      </div>
    </div>
  )
}
