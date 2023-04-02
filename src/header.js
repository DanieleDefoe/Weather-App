import Icon from './images/favicon.svg'

const createHeader = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const img = new Image()
  img.className = 'header__icon'
  img.src = Icon
  img.alt = 'weather app icon'

  const title = document.createElement('h1')
  title.className = 'header__title'
  title.textContent = 'weather app'

  header.append(img, title)

  return header
})()

export default createHeader
