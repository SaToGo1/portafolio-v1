import { AboutMe } from './layout/2-about-me/AboutMe.jsx'
import { Header } from './layout/0-header/header.jsx'
import { Home } from './layout/1-home/home.jsx'
import { Project } from './layout/3-project/project.jsx'

function App () {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Project />
      {/* <ContactMe /> */}
    </>
  )
}

export default App
