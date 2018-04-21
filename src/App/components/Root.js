import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const Root = ({ store, graphqlClient }) => (
  <Router>
    <Provider store={store}>
      <ApolloProvider client={graphqlClient}>
        <Route path="/" component={App} />
      </ApolloProvider>
    </Provider>
  </Router>
)

export default Root
