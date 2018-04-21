const Express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const { graphiqlExpress, graphqlExpress } = require('graphql-server-express')
const schema = require('./schema')

function createApi() {
  const router = Express.Router()

  router.use('/api/auth',
    bodyParser.json(),
    (req, res) => {
      const { email, password } = req.body
      if (email === 'clone@facebook.com' && password === '123') {
        const SEVEN_DAYS_IN_MILLISECONDS = 604800000
        const cookie = jwt.sign(
          { id: '5ab1299177282be8578f3612', username: '@theclone' },
          'this_is_my_secret_key ^^',
          { expiresIn: '7 days' }
        )
        res.cookie(
          '__session',
          cookie,
          { maxAge: SEVEN_DAYS_IN_MILLISECONDS }
        )
        res.status(200).send('Authorized')
      } else {
        res.status(401).send('Not authorized')
      }
    }
  )

  router.post(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({
      schema
    }))

  router.get(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    }))

  return router
}

module.exports = createApi
