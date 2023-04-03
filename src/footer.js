import Icon from './images/github.svg'

const createFooter = (() => {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const copyright = document.createElement('p')
  copyright.className = 'footer__copyright'
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Abuzar Mamedov`

  const githubIcon = document.createElement('a')
  githubIcon.className = 'footer__icon'
  githubIcon.rel = 'noreferrer nofollow noopener'
  githubIcon.href = 'https://github.com/DanieleDefoe'

  footer.append(copyright, githubIcon)

  return footer
})()

export default createFooter
