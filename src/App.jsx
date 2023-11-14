import { AboutMe } from './layout/2-about-me/about-me.jsx'
import { Header } from './layout/0-header/header.jsx'
import { Home } from './layout/1-home/home.jsx'
import { Project } from './layout/3-project/project.jsx'
import { Contact } from './layout/4-contact/contact.jsx'
import { Footer } from './layout/5-footer/footer.jsx'

function App () {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
