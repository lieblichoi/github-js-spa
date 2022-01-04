// css
require('./css/style.css')

// router
const {
  initialRoutes,
  hashRouterPush
} = require('./router')

// app division
const hashAppDiv = document.querySelector('#hash-app')

// Hash History
initialRoutes('hash', hashAppDiv)

window.onload = () => {
  const hashLinker = document.querySelectorAll('a.hash')

  hashLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
      const pathName = evt.target.getAttribute('route')

      hashRouterPush(pathName, hashAppDiv)
    })
  })
}
