import express from 'express'
import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'

import Root from '../shared/components/Root'
import render from './render'

const server = express()

//server.user

server.use((req, response) => {
  render(
    <Router>
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
