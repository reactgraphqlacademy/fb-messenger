import React from 'react'
import { StaticRouter as Router } from 'react-router'
import Context from 'react-context-component'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import fetch from 'node-fetch'

import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { getDataFromTree } from 'react-apollo'

import render from './render'
import Root from '../shared/App/components/Root'
import { configureStore } from '../shared/App/store'
import { API_BASE_URL } from '../shared/App/config'

const ErrorPage = ({ error }) => (
  <div>
    <h1>Oops there was an error</h1>
    {process.env.NODE_ENV !== 'production'
      ? <div>
        <h2>{error.toString()}</h2>
        <p>{error.stack}</p>
      </div>
      : null}
  </div>
)

const reactApp = () => async (req, response) => {
  let HTML
  let status = 200
  const setStatus = (newStatus) => {
    status = newStatus
  }
  const initialState = { session: req.user }
  const sheet = new ServerStyleSheet()
  const store = configureStore(initialState)
  const graphqlClient = new ApolloClient({
    link: createHttpLink({ uri: `${API_BASE_URL}/graphql`, fetch }),
    cache: new InMemoryCache()
  })

  try {
    const App = (
      <StyleSheetManager sheet={sheet.instance}>
        <Context setStatus={setStatus}>
          <Router context={{}} location={req.url}>
            <Root store={store} graphqlClient={graphqlClient} />
          </Router>
        </Context>
      </StyleSheetManager>
    )
    await getDataFromTree(App)
    render(App, { sheet, response, graphqlClient })
  } catch (error) {
    render(<ErrorPage error={error} />, { sheet, response, status: 500 })
  }
}

export default reactApp
