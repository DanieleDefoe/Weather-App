/* eslint-disable no-unused-vars */
import './styles/style.css'

import header from './header'
import main from './mainSect'
import footer from './footer'

const createApp = (() => {
  document.body.append(header, main, footer)
})()
