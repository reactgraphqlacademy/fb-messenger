const { makeExecutableSchema } = require("graphql-tools");
const { GraphQLDateTime } = require("graphql-iso-date");
const { connectionFromArray } = require("graphql-relay");
const { loremIpsum } = require("lorem-ipsum");

const threads = require("./mocks/threads.json");
const messages = require("./mocks/messages.json");

const cache = {};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomId() {
  return Math.floor(Math.random() * Math.floor(10000));
}

cache.viewer = {
  username: "@clone2971",
  fullname: "Clone",
  id: randomId(),
};
cache.works = {
  [cache.viewer.id]: {
    id: randomId(),
    userId: cache.viewer.id,
    company: "Galactic Republic",
  },
};

cache.messages = messages;
cache.threads = threads;

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
    text: String!
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

  type Settings {
    location: String!
  }

  type Work {
    id: ID!
    company: String!
    jobTitle: String
  }

  input UpdateWorkInput {
    userId: ID!
    company: String!
    jobTitle: String
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

    viewer: User
    work(userId: ID!): Work
  }

  input SendMessageInput {
    from: String!
    to: String!
    text: String!
  }

  type SendMessagePayload {
    message: Message
  }

  type UpdateUserPayload {
    user: User
  }

  type UpdateWorkPayload {
    work: Work
  }

  type Mutation {
    sendMessage(message: SendMessageInput!): SendMessagePayload!
    updateUser(user: UpdateUserInput!): UpdateUserPayload!
    updateWork(work: UpdateWorkInput!): UpdateWorkPayload!
  }

  type User {
    username: String!
    fullname: String!
    bio: String
    id: ID!
    work: Work
  }

  input UpdateUserInput {
    fullname: String!
    bio: String
    id: ID!
  }
`;

const resolvers = {
  Mutation: {
    sendMessage: (_, { message }) => {
      cache.threads = cache.threads.map((thread) => {
        if (thread.username === message.to) {
          thread.lastMessage = message;
        }
        return thread;
      });

      message.id = Math.random().toString(36).substr(2, 9);
      message.time = new Date();
      cache.messages.push(message);

      return { message };
    },
    updateUser: async (_, { user }) => {
      cache.viewer = { ...cache.viewer, ...user };

      await sleep(1000);

      return { user: cache.viewer };
    },
    updateWork: async (_, { work: workInput }) => {
      const work = { ...cache.works[workInput.userId], ...workInput };
      cache.works[workInput.userId] = work;

      await sleep(1000);

      return { work };
    },
  },
  Query: {
    messages: (_, { username, ...args }) =>
      myConnectionFromArray(
        cache.messages.filter(
          (message) => message.from === username || message.to === username
        ),
        args
      ),
    threads: (_, args) => myConnectionFromArray(cache.threads, args),
    viewer: () => cache.viewer,
    work: (_, args) => cache.works[args.userId],
  },
  User: {
    work: (parent) => cache.works[parent.id],
    bio: () => loremIpsum(),
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
