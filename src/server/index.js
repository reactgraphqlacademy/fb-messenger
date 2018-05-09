import express from 'express'
import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'
import proxy from 'http-proxy-middleware'

import Root from '../shared/components/Root'
import render from './render'

const server = express()

// The following middleware is to proxy some paths from the WebpackDevServer to
// the server that renders React. This is just for development.
server.use(
  ['/static', '/sockjs-node'],
  proxy({
    target: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
    ws:true,
  })
)

server.use((req, response) => {
  render(
    <Router location={req.url}>
      <Root />
    </Router>,
    { response }
  )
})

const serverInstance = server.listen(process.env.REACT_APP_SERVER_PORT, () => {
  const { address, port } = serverInstance.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running an Express server at http://${address}:${port}`)
})
