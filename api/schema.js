const { makeExecutableSchema } = require('graphql-tools')
const threads = require('./mocks/threads.json')
const messages = require('./mocks/messages.json')
const { GraphQLDateTime } = require('graphql-iso-date')
const jwt = require('jsonwebtoken')
const {
  connectionFromArray
} = require('graphql-relay')

if (!global.messages) {
  global.messages = messages
}

if (!global.threads) {
  global.threads = threads
}

const gql = String.raw

function myConnectionFromArray(array, args) {
  const connection = connectionFromArray(array, args)
  connection.pageInfo.totalCount = array.length

  return connection
}

const typeDefs = gql`
  scalar DateTime
  interface Node {
    id: ID!
  }
  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
    totalCount: Int
  }
  type Message implements Node {
    from: String!
    to: String!
    message: String!
    id: ID!
    time: DateTime!
    thread: Thread
  }
  type ThreadMessageConnection {
    pageInfo: PageInfo!
    edges: [ThreadMessageEdge]
  }
  type ThreadMessageEdge {
    cursor: String!
    node: Message
  }
  type ThreadConnection {
    pageInfo: PageInfo!
    edges: [ThreadEdge]
  }
  type ThreadEdge {
    cursor: String!
    node: Thread
  }
  type Thread {
    "Email of the user"
    title: String!
    firstName: String!
    lastName: String!
    lastMessage: Message!
    username: String!
    conversationConnection(
      first: Int,
      after: String,
      last: Int,
      before: String
    ): ThreadMessageConnection
  }
  type Status {
    status: Int!
  }
  type Query {
    conversationConnection(
      first: Int,
      after: String,
      last: Int,
      before: String,
      username: String!
    ): ThreadMessageConnection
    threadsConnection(
      first: Int,
      after: String,
      last: Int,
      before: String
    ): ThreadConnection
    threads: [Thread]
    getSession(email: String!, password: String!): Status
  }
  input SendMessageInput {
    from: String!
    to: String!
    message: String!
  }
  type Mutation {
    sendMessage(input: SendMessageInput!): Message
  }
`

const resolvers = {
  Mutation: {
    sendMessage: (_, { input: message }, context) => {
      global.threads = global.threads.map(thread => {
        if (thread.username === message.to) {
          thread.lastMessage = message
        }
        return thread
      })

      message.id = Math.random().toString(36).substr(2, 9)
      message.time = new Date()
      global.messages.push(message)
      return message
    }
  },
  Query: {
    conversationConnection: (_, { username, ...args }, context) => myConnectionFromArray(
      global.messages.filter(
        message => message.from === username || message.to === username
      ),
      args,
    ),
    threadsConnection: (_, args, context) => myConnectionFromArray(
      global.threads,
      args,
    ),
    threads: () => global.threads,
    getSession: (_, { email, password }, context) => {
      let status = 200
      if (email === 'clone@facebook.com' && password === '123') {
        const SEVEN_DAYS_IN_MILLISECONDS = 604800000
        const cookie = jwt.sign(
          { id: '5ab1299177282be8578f3612', username: '@theclone' },
          'this_is_my_secret_key ^^',
          { expiresIn: '7 days' }
        )
        context.response.cookie(
          '__session',
          cookie,
          { maxAge: SEVEN_DAYS_IN_MILLISECONDS }
        )
      } else {
        status = 401
      }
      return { status }
    }
  },
  Message: {
    thread: () => threads[0]
  },
  Thread: {
    conversationConnection: (_, args, context) => myConnectionFromArray(
      messages.filter(
        message => message.from === _.username || message.to === _.username
      ),
      args
    ),
  },
  DateTime: GraphQLDateTime
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
