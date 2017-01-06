import React from 'react'
import ReactDOM from 'react-dom'

// Used for development, should be removed from production.
if (module.hot) {
  module.hot.accept()
}

// The Application
import BlogWall from './containers/blog-wall'
// Mount the Application
ReactDOM.render(<BlogWall />, document.getElementById('timeline-outer'))
