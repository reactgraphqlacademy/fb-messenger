# ReactJS Facebook messenger

The goal of this exercise is to learn how to use GraphQL queries and mutations using Apollo client.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md


### Step 2
```sh
 git checkout SSR
 ```

### Step 3
```sh
 npm i
 ```

## Exercise


### Part 1

```sh
 npm start
 ```

* React
  * src/server/render.js bodyHTML = renderToString
  * src/server/render.js  ...src="${bundleUrl}"></script>
  * src/client/index hydrate instead of render

* Redux
  * src/server/app.js configure store initialState

* Style Components
  * src/server/app.js <StyleSheetManager>
  * src/server/render.js sheet.getStyleTags()

* GraphQL
  * src/server/app.js getDataFromTree
  * src/server/app.js link: createHttpLink({ uri: `${API_BASE_URL}/graphql` }), // add fetch
  * src/server/render.js graphqlClient ? window.__APOLLO_STATE
  * src/client/index cache: new InMemoryCache().restore(window.__APOLLO_STATE__),

### Bonus

* Do we have to do initialize the Redux state in src/client/index with the same state than in src/server/app.js?

* Threads should not rendered on the initial response from the server

## Links

*  [https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976](https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976)
* [https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations](https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations)
* [https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment](https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment)
* [http://graphql.org/learn/](http://graphql.org/learn/)
* [http://graphql.org/learn/thinking-in-graphs/](http://graphql.org/learn/thinking-in-graphs/)
* [https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)
* [https://dev-blog.apollodata.com/graphql-explained-5844742f195e](https://dev-blog.apollodata.com/graphql-explained-5844742f195e)
* [https://facebook.github.io/relay/docs/thinking-in-graphql.html](https://facebook.github.io/relay/docs/thinking-in-graphql.html)
* [https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747](https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)
* [https://github.com/apollographql/apollo-server](https://github.com/apollographql/apollo-server)
* [https://www.youtube.com/watch?v=PHabPhgRUuU](https://www.youtube.com/watch?v=PHabPhgRUuU)
* [https://facebook.github.io/relay/graphql/connections.htm](https://facebook.github.io/relay/graphql/connections.htm)
* [https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba](https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba)
* [https://dev-blog.apollodata.com/](https://dev-blog.apollodata.com/)
* [http://dev.apollodata.com](http://dev.apollodata.com)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
