// respect css order
import '../project-card.css'
import './fake-store.css'

import storeImg from '../../../../assets/images/store.jpg'
import { ProjectStack } from '../../../components/stack-project/project-stack'
import { BtnProj } from '../../../components/button-project/button-project.jsx'
import { ExpandButton } from '../../../components/expand-button/expand-button'

export function FakeStore () {
  return (
    <article className='projectCard__Container' id='proj-store'>
      <div className='projectCard store__projCard'>
        <img className='projectCard__img' src={storeImg} />
        <div className='projectCard__divText blue-border-top store__divText store__blue-border left__animation'>
          <h2 className='projectCard__divText-h2'>Fake Store</h2>
          <ProjectStack techArray={techArray} />
          <p className='projectCard__p projectCard__marginTop'><span className='color-blue'>2023</span></p>
          <p className='projectCard__p projectCard__marginTop'>
            Store web application with <span className='color-blue'>responsive design</span>.
          </p>
          <p className='projectCard__p'>
            Search products based on
            category and price, add and remove them from the cart, modify quantities, and purchase.
          </p>
          <div className='projectCard__buttonsDiv projectCard__marginTop'>
            <BtnProj name='Live' reff='https://satogo1.github.io/shopping-cart/' colorBtn='blue'>
              <svg xmlns='http://www.w3.org/2000/svg' className='projectCard__SVG' viewBox='0 0 448 512'>
                <path d='M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
              </svg>
            </BtnProj>
            <BtnProj name='Code' reff='https://github.com/SaToGo1/shopping-cart' colorBtn='blue'>
              <svg xmlns='http://www.w3.org/2000/svg' className='projectCard__SVG' viewBox='0 0 640 512'>
                <path d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z' />
              </svg>
            </BtnProj>
          </div>
        </div>
      </div>
      <div className='projectCard__expandButton store__expandButton'>
        <ExpandButton reff='#proj-exTrack' colorBtn='blue' duration={1000} backgroundVisible />
      </div>
    </article>
  )
}

const techArray = [
  {
    class: 'devicon-react-original colored', // REACT
    name: ''
  },
  {
    class: 'devicon-javascript-plain colored', // Js
    name: ''
  },
  {
    class: 'devicon-html5-plain colored', // HTML
    name: ''
  },
  {
    class: 'devicon-css3-plain colored', // CSS
    name: ''
  },
  {
    class: 'devicon-webpack-plain colored', // WEBPACK
    name: ''
  }
]
