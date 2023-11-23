import './tech-card.css'

export function TechCard ({ iconName, name }) {
  return (
    <div className='techCard'>
      <i className={`${iconName} techCard__icon`} />
      <span>{ name }</span>
    </div>
  )
}
