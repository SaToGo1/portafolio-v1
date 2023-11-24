export function animateScroll (targetElement, duration = 2000) {
  const targetOffset = targetElement.offsetTop
  const startingTime = performance.now()
  const startingY = window.scrollY // Current scroll position

  // Temporarily set scroll-behavior to auto
  document.documentElement.style.scrollBehavior = 'auto'

  const scroll = (currentTime) => {
    const elapsedTime = currentTime - startingTime
    const progress = Math.min(elapsedTime / duration, 1)
    const easedProgress = easeOut(progress)

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

function easeOut (t) {
  t--
  return -1 * (t * t * t * t - 1)
}

// function easeOut (t, b, c, d) {
//   t /= d
//   t--
//   return -c * (t * t * t * t - 1) + b
// }

// function easeOut2 (t, b, c, d) {
//   t /= d
//   return -c * t * (t - 2) + b
// }

// function easeInOut (t, b, c, d) {
//   t /= d / 2
//   if (t < 1) return (c / 2) * t * t + b
//   t--
//   return (-c / 2) * (t * (t - 2) - 1) + b
// }
