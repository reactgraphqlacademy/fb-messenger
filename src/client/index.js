import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { configureStore } from '../shared/store'
import Root from '../shared/components/Root'

const store = configureStore()

ReactDOM.hydrate(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
