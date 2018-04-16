import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Route path="/" component={App} />
  </Provider>
)

export default Root
