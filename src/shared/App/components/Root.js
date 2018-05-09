import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import App from './App'

const Root = ({ store, graphqlClient }) => (
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <Route path="/" component={App} />
    </ApolloProvider>
  </Provider>
)

export default Root
