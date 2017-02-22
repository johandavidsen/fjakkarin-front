import React from 'react'
import ReactDOM from 'react-dom'
import { Contributions } from './containers/contributions'

// Used for development, should be removed from production.
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Contributions />, document.getElementById('footer-container-top'))
