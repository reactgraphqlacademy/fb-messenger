import express, { Router } from 'express'
import path from 'path'
import proxy from 'http-proxy-middleware'
import setupServer from './setupServer'
import createFakeAPI from './api'

const middlewares = [
  Router()
    // this should be in a different project, it's hear to emulate an API
    .use(createFakeAPI())
    .use('/static/css/', express.static(path.join(process.cwd(), 'src/shared/styles')))
    .use(['/static', '/sockjs-node'],
      proxy({
        target: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
        ws: true,
        logLevel: 'error'
      }))
]

const app = setupServer({ middlewares })

const server = app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  const { address, port } = server.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running an Express server at http://${address}:${port}`)
})
