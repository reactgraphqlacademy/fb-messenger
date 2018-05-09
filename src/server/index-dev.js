import express, { Router } from 'express'
import path from 'path'
import proxy from 'http-proxy-middleware'

import createServer from './createServer'

const middlewares = [
  Router()
    .use('/static/css/', express.static(path.join(process.cwd(), 'src/shared/App/styles')))
    .use('/images/', express.static(path.join(process.cwd(), 'public/images')))
    .use(['/static', '/sockjs-node', '/graphql', '/graphiql'],
      proxy({
        target: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
        ws: true,
        logLevel: 'error'
      }))
]

const server = createServer({ middlewares })

const serverInstance = server.listen(process.env.REACT_APP_SERVER_PORT, () => {
  const { address, port } = serverInstance.address()
  console.log(`Environment = ${process.env.NODE_ENV}`)
  console.log(`Running an Express server at http://${address}:${port}`)
})
