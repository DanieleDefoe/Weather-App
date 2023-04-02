/* eslint-disable no-unused-vars */
import './styles/style.css'

import header from './header'
import main from './mainSect'

const createApp = (() => {
  document.body.append(header, main)
})()
