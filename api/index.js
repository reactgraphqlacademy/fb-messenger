const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");
const routes = require("./routes");

function setupApi({ app, routesPrefix = "/api" } = {}) {
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({
      user: req.user,
      response: res
    })
  });

  app.use(routes);

  apollo.applyMiddleware({
    app,
    path: `${routesPrefix}/graphql`
  });

  return app;
}

// const app = express();
// setupApi({ app });

// app.listen(8888, () => {
//   console.log("listening on port 8888");
// });

module.exports = { setupApi };
