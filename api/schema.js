const { makeExecutableSchema } = require('graphql-tools')
const threads = require('./mocks/threads.json')
const messages = require('./mocks/messages.json')
const { GraphQLDateTime } = require('graphql-iso-date')
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

  type Thread {
    "Email of the user"
    title: String!
    firstName: String!
    lastName: String!
    lastMessage: Message!
    username: String!
    conversation(
      first: Int,
      after: String,
      last: Int,
      before: String
    ): ThreadMessageConnection
  }

  type Query {
    conversation(username: String!): [Message]
    threads: [Thread]
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
    conversation: (_, { username }, context) => global.messages.filter(
      message => message.from === username || message.to === username
    ),
    threads: () => global.threads
  },
  Message: {
    thread: () => threads[0]
  },
  Thread: {
    conversation: (_, args, context) => connectionFromArray(
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
