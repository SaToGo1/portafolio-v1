import './tech-project-card.css'

export function TechCard ({ iconName, name }) {
  return (
    <div className='techProjectCard'>
      <i className={`${iconName} techProjectCard__icon`} />
      <span>{name}</span>
    </div>
  )
}
