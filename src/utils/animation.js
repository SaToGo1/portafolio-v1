export function animateScroll (targetElement, duration = 2000) {
  const targetOffset = targetElement.offsetTop
  const startingTime = performance.now()
  const startingY = window.scrollY // Current scroll position

  // Temporarily set scroll-behavior to auto
  document.documentElement.style.scrollBehavior = 'auto'

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startingTime
    const progress = Math.min(elapsedTime / duration, 1)
    const easedProgress = chillEaseOut(progress)

    // Calculate the current position based on the scroll progress
    const currentPosition = startingY + (targetOffset - startingY) * easedProgress

    window.scrollTo(0, currentPosition)

    if (elapsedTime < duration) {
      window.requestAnimationFrame(scroll)
    } else {
      // Restore scroll-behavior to smooth after the animation is complete
      document.documentElement.style.scrollBehavior = 'smooth'
    }
  }

  window.requestAnimationFrame(scroll)
}

// function easeOut (t) {
//   t--
//   return -1 * (t * t * t * t - 1)
// }

function chillEaseOut (t) {
  t--
  return t * t * t + 1
}

// function easeIn (t) {
//   return t * t * t * t
// }

// function linear (t) {
//   return t
// }
