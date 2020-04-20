const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./schema");
const app = express();

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({ app });

module.exports = app;
