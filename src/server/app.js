import React from 'react'
import { StaticRouter as Router } from 'react-router'
import Context from 'react-context-component'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import render from './render'
import Root from '../shared/components/Root'
import { configureStore } from '../shared/store'

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

const reactApp = () => (req, response) => {
  let HTML
  let status = 200
  const setStatus = (newStatus) => {
    status = newStatus
  }
  const initialState = { session: req.user }
  const store = configureStore(initialState)
  const sheet = new ServerStyleSheet()

  try {
    render(
      <StyleSheetManager sheet={sheet.instance}>
        <Context setStatus={setStatus}>
          <Router context={{}} location={req.url}>
            <Root store={store}/>
          </Router>
        </Context>
      </StyleSheetManager>,
      { sheet, response }
    )
  } catch (error) {
    render(<ErrorPage error={error} />, { sheet, response, status: 500 })
  }
}

export default reactApp
