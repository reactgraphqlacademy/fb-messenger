var express = require("express");
var graphqlHTTP = require("express-graphql");

const schema = require("./schema");

const api = express();

api.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = api;
