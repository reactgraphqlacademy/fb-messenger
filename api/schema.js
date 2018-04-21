const { makeExecutableSchema } = require('graphql-tools')
const threads = require('../public/mocks/threads.json')
const messages = require('../public/mocks/messages.json')
const { GraphQLDateTime } = require('graphql-iso-date')

const gql = String.raw

const typeDefs = gql`
  scalar DateTime

  type Message {
    from: String!
    to: String!
    message: String!
    id: ID!
    time: DateTime!
    thread: Thread
  }

  type Thread {
    "Email of the user"
    email: String!
    username: String!
  }

  type Query {
    conversation(username: String!): [Message]
    threads: [Thread]
  }
`

const resolvers = {
  Message: {
    thread: () => threads[0]
  },
  Query: {
    conversation: (_, { username }, context) => messages.filter(
      message => message.from === username || message.to === username
    ),
    threads: () => threads
  },
  DateTime: GraphQLDateTime
}

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
