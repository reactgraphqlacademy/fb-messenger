// var { buildSchema } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { GraphQLDateTime } = require("graphql-iso-date");
const { connectionFromArray } = require("graphql-relay");
const loremIpsum = require("lorem-ipsum");

const threads = require("./mocks/threads.json");
const messages = require("./mocks/messages.json");

if (!global.messages) {
  global.messages = messages;
}

if (!global.threads) {
  global.threads = threads;
}

const gql = String.raw;

function myConnectionFromArray(array, args) {
  const connection = connectionFromArray(array, args);
  connection.pageInfo.totalCount = array.length;

  return connection;
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

  type MessageConnection {
    pageInfo: PageInfo!
    edges: [MessageEdge]
  }

  type MessageEdge {
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
    messages(
      first: Int
      after: String
      last: Int
      before: String
    ): MessageConnection
  }

  type Status {
    status: Int!
  }

  type Query {
    messages(
      first: Int
      after: String
      last: Int
      before: String
      username: String!
    ): MessageConnection

    threads(
      first: Int
      after: String
      last: Int
      before: String
    ): ThreadConnection
    user(username: String!): User
  }

  input SendMessageInput {
    from: String!
    to: String!
    message: String!
  }

  type Mutation {
    sendMessage(input: SendMessageInput!): Message
    sendMessageWithRandomError(input: SendMessageInput!): Message
  }

  type User {
    username: String!
    bio: String!
  }
`;

const sendMessage = (_, { input: message }, context) => {
  global.threads = global.threads.map((thread) => {
    if (thread.username === message.to) {
      thread.lastMessage = message;
    }
    return thread;
  });

  message.id = Math.random().toString(36).substr(2, 9);
  message.time = new Date();
  global.messages.push(message);
  return message;
};

const resolvers = {
  Mutation: {
    sendMessage,
  },
  Query: {
    messages: (_, { username, ...args }) =>
      myConnectionFromArray(
        global.messages.filter(
          (message) => message.from === username || message.to === username
        ),
        args
      ),
    threads: (_, args) => myConnectionFromArray(global.threads, args),
    user: (_, { username }) => ({
      username,
      bio: loremIpsum(),
    }),
  },
  Message: {
    thread: () => threads[0],
  },
  Thread: {
    messages: (_, args) =>
      myConnectionFromArray(
        messages.filter(
          (message) => message.from === _.username || message.to === _.username
        ),
        args
      ),
  },
  DateTime: GraphQLDateTime,
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
