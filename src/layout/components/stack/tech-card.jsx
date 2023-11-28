import './tech-card.css'
import PropTypes from 'prop-types'

export function TechCard ({ iconName, name }) {
  return (
    <div className='techCard'>
      <i className={`${iconName} techCard__icon`} />
      <span className='techCard__span'>{name}</span>
    </div>
  )
}

TechCard.propTypes = {
  iconName: PropTypes.string,
  name: PropTypes.string
}
