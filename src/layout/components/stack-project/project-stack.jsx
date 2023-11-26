import './project-stack.css'
import { TechCard } from './tech-project-card'
import viteIco from '../../../assets/icons/vite.svg'
import PropTypes from 'prop-types'

export function ProjectStack ({ techArray }) {
  return (
    <div className='stackProjectContainer'>
      <div className='stackProject'>
        {techArray.map((tech, i) => {
          if (tech.name === 'Vite') {
            return <img src={viteIco} key={i} className='stackProject__icon' />
          }
          return (
            <TechCard iconName={tech.class} name={tech.name} key={i} />
          )
        })}
      </div>
    </div>
  )
}

ProjectStack.propTypes = {
  techArray: PropTypes.arrayOf(
    PropTypes.shape({
      class: PropTypes.string.isRequired,
      name: PropTypes.string
    })
  )
}
