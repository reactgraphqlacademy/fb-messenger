import React from 'react'
import ReactDOM from 'react-dom'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'

import { configureStore } from './store'
import './styles/index.css'
// import { API_BASE_URL } from './config'

import Root from './components/Root'

const configLink = {
  uri: `/graphql`,
  credentials: 'include'
}

const graphqlClient = new ApolloClient({
  link: ApolloLink.from([createHttpLink(configLink)]),
  cache: new InMemoryCache(),
})

const store = configureStore()

ReactDOM.render(
  <Root store={store} graphqlClient={graphqlClient} />,
  document.getElementById('root')
)
