import express from 'express'
import helmet from 'helmet'
import verifyJWT from 'express-jwt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import createFakeAPI from './api'
import reactApp from './app'

const TOKEN = '__session'

const setupServer = ({ middlewares = [] } = {}) => {
  const server = express()
  middlewares.map(middleware => server.use(middleware))

  // this should be in a different project
  createFakeAPI(server)

  server.use(cookieParser())
  server.use(
    verifyJWT({
      secret: 'this_is_my_secret_key ^^',
      credentialsRequired: false,
      getToken: req => req.cookies[TOKEN]
    })
  )
  server.use(helmet())
  server.use(reactApp())

  return server
}

export default setupServer
