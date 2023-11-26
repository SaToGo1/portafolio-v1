import './tech-project-card.css'
import PropTypes from 'prop-types'

export function TechCard ({ iconName, name }) {
  return (
    <div className='techProjectCard'>
      <i className={`${iconName} techProjectCard__icon`} />
      <span>{name}</span>
    </div>
  )
}

TechCard.propTypes = {
  iconName: PropTypes.string,
  name: PropTypes.string
}
