import './stack.css'
import { TechCard } from './tech-card'
import viteIco from '../../../assets/icons/vite.svg'

export function Stack () {
  return (
    <div className='stackContainer'>
      <h3 className='stackContainer__h3'>Stack</h3>
      <div className='stack'>
        <TechCard iconName='devicon-html5-plain colored' name='HTML5' />
        <TechCard iconName='devicon-css3-plain-wordmark colored' name='CSS3' />
        <TechCard iconName='devicon-javascript-plain colored' name='Javascript' />
        <TechCard iconName='devicon-react-original colored' name='React' />
        {/* <TechCard iconName='devicon-vuejs-plain colored' name='Vue' /> */}
        <TechCard iconName='devicon-angular-plain colored' name='Angular' />
        <TechCard iconName='devicon-python-plain colored' name='Python' />
        <TechCard iconName='devicon-fastapi-plain colored' name='Fastapi' />
        <TechCard iconName='devicon-nodejs-plain colored' name='Node.js' />
        <TechCard iconName='devicon-express-original' name='Express' />
        <TechCard iconName='devicon-mongodb-plain colored' name='MongoDB' />
        {/* <TechCard iconName='devicon-jest-plain colored' name='Jest' /> */}
        <TechCard iconName='devicon-git-plain colored' name='Git' />
        <TechCard iconName='devicon-mysql-plain colored' name='MySQL' />
        {/* <div className='stack__iconContainer'>
          <img src={viteIco} className='stack__icon' />
          <span>Vite</span>
        </div>
        <TechCard iconName='devicon-webpack-plain colored' name='Webpack' /> */}
      </div>
    </div>
  )
}
