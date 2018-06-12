import express from 'express'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import proxy from 'http-proxy-middleware'

import Root from '../shared/components/Root'
import render from './render'

// Express is the server that we use to return dynamic HTML
const server = express()

// The following middleware is to proxy some paths from the WebpackDevServer to
// the server that returns the dynamic HTML. This is just for development.
server.use(
  ['/static', '/sockjs-node'],
  proxy({
    target: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
    ws: true
  })
)

// The following middleware renders our React app to a string into the response
server.use((req, response) => {
  render(
    <Router>
      <Root />
    </Router>,
    { response }
  )
})

// Starts the server
const serverInstance = server.listen(process.env.REACT_APP_SERVER_PORT, () => {
  const { address, port } = serverInstance.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running an Express server at http://${address}:${port}`)
})
