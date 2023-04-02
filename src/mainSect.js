import form from './form'
import weatherSection from './weatherSect'

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(form, weatherSection)

  return main
})()

export default createMain
