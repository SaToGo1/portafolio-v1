import { useEffect } from 'react'

export function useHeaderActiveOnScroll () {
  useEffect(() => {
    const handleScroll = () => {
      const headerHome = document.getElementById('header-home')
      const headerAbout = document.getElementById('header-about')
      const headerProject = document.getElementById('header-proj')
      const headerContact = document.getElementById('header-contact')

      const home = document.getElementById('home')
      const about = document.getElementById('aboutMe')
      const proj = document.getElementById('projects')
      const contact = document.getElementById('contact')

      const homeTop = home.offsetTop
      const aboutTop = about.offsetTop
      const projTop = proj.offsetTop
      const contactTop = contact.offsetTop

      const deleteStyle = () => {
        headerHome.classList.remove('header__in-section')
        headerAbout.classList.remove('header__in-section')
        headerProject.classList.remove('header__in-section')
        headerContact.classList.remove('header__in-section')
      }

      // Change the class of the header based on the scroll position
      if (window.scrollY >= homeTop && window.scrollY < aboutTop) {
        deleteStyle()
        headerHome.classList.add('header__in-section')
      } else if (window.scrollY >= aboutTop && window.scrollY < projTop) {
        deleteStyle()
        headerAbout.classList.add('header__in-section')
      } else if (window.scrollY >= projTop && window.scrollY < contactTop - 150) {
        deleteStyle()
        headerProject.classList.add('header__in-section')
      } else {
        deleteStyle()
        headerContact.classList.add('header__in-section')
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
