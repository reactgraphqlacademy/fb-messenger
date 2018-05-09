import express, { Router } from 'express'
import path from 'path'
import proxy from 'http-proxy-middleware'
import setupServer from './setupServer'
import createFakeAPI from './api'

const server = express()

server.use((req, response) => {
  render(
    <Root />,
    { response }
  )
})

const server = app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running an Express server at http://${address}:${port}`)
})
