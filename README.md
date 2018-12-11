# ReactJS Facebook messenger

The goal of this exercise is to learn how to use GraphQL queries and mutations using Apollo client.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout graphql-apollo
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

[http://localhost:3000/graphiql](http://localhost:3000/graphiql)

- Query a list of threads and retrieve the username of each thread.
- Query a conversation. Hint, you need to provide a username.
- Send a new message.
- How many threads in the system?
- How many types do we have in the system?

### Part 2

1. In src/Messenger/components/Threads.js you need to fetch the threads data using a graphql query. You'll find more info about the steps you need to follow at the bottom of src/Messenger/components/Threads.js
2. In src/Messenger/components/Threads.js, replace the threads query by threadsConnection. Hint, you'll also need to update the threads.map(thread => ...
3. In src/Messenger/components/Conversation/Content/Messages.js, fetch a conversation by using the conversationConnection query. Hint, you'll need to do the same you did in Threads.js PLUS adding the username variable to the query. You can pass variables to the graphql HoC by doing:

```
export default graphql(gql`{ ... }`, {
  options: props => ({
    variables: {
        // variables
     }
  }),
})(MyComponent);
```

4. Use the sendMessage mutation to send a message. Sending a message should:
   _ Update the conversation to display the new message
   _ Update the threads to display the new message
   You have some hints at the bottom of src/Messenger/components/Conversation/Content/Messages.js to help you complete task 4

#### Bonus part 2

- Use the getSession query to log in a user instead of calling the REST API

### Part 3

1. Add query batching by replacing the apollo-link-http with apollo-link-batch-http in `src/index.js`. Hint: https://www.apollographql.com/docs/link/links/batch-http.html
2. Prefetch the bio of the user displayed in `src/Messenger/components/Conversation/Content/UserDetail` when the user moves the mouse over the "info-circle" link in `src/Messenger/components/Conversation/ConversationBar.js` Hint: https://www.apollographql.com/docs/react/recipes/performance.html#prefetching
3. Create a HoC in `src/Messenger/components/Conversation/Content/Messages.js` that transforms the Mutation component in a HoC and passes the error from the Mutation component to the Messages component.

## Articles and links

- [https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976](https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976)
- [https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations](https://www.apollographql.com/docs/react/advanced/caching.html#after-mutations)
- [https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment](https://www.apollographql.com/docs/react/advanced/caching.html#writequery-and-writefragment)
- [http://graphql.org/learn/](http://graphql.org/learn/)
- [http://graphql.org/learn/thinking-in-graphs/](http://graphql.org/learn/thinking-in-graphs/)
- [https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)
- [https://dev-blog.apollodata.com/graphql-explained-5844742f195e](https://dev-blog.apollodata.com/graphql-explained-5844742f195e)
- [https://facebook.github.io/relay/docs/thinking-in-graphql.html](https://facebook.github.io/relay/docs/thinking-in-graphql.html)
- [https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747](https://dev-blog.apollodata.com/the-anatomy-of-a-graphql-query-6dffa9e9e747)
- [https://github.com/apollographql/apollo-server](https://github.com/apollographql/apollo-server)
- [https://www.youtube.com/watch?v=PHabPhgRUuU](https://www.youtube.com/watch?v=PHabPhgRUuU)
- [https://facebook.github.io/relay/graphql/connections.htm](https://facebook.github.io/relay/graphql/connections.htm)
- [https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba](https://dev-blog.apollodata.com/introducing-launchpad-the-graphql-server-demo-platform-cc4e7481fcba)
- [https://dev-blog.apollodata.com/](https://dev-blog.apollodata.com/)
- [http://dev.apollodata.com](http://dev.apollodata.com)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
