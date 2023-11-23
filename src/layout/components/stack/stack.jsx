import './stack.css'
import { TechCard } from './tech-card'

export function Stack () {
  return (
    <div className='stackContainer'>
      <h2>Stack</h2>
      <div className='stack'>
        <TechCard iconName='devicon-html5-plain colored' name='HTML' />
        <TechCard iconName='devicon-css3-plain-wordmark colored' name='CSS' />
        <TechCard iconName='devicon-javascript-plain colored' name='Javascript' />
        <TechCard iconName='devicon-react-original colored' name='React' />
        <TechCard iconName='devicon-nodejs-plain colored' name='Node' />
        <TechCard iconName='devicon-express-original colored' name='Express' />
        <TechCard iconName='devicon-mongodb-plain colored' name='MongoDB' />
        <TechCard iconName='devicon-jest-plain colored' name='Jest' />
        <TechCard iconName='devicon-git-plain colored' name='Git' />
      </div>
    </div>
  )
}
