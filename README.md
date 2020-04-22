# GraphQL Apollo Client

This exercise is part of the [React GraphQL Academy](http://reactgraphql.academy) training material.

## Our teaching method

1. Collaborative learning environment & pair programming.
   - Rooms with small groups
   - Work with your peers, discuss, help each other.
2. We try to foster critical thinking.
   - ⬆️ Discovery ⬇️ Instruction
3. We don’t explain everything you need to know before the exercise:
   - The exercise is meant to help you come up with conclusions.
   - Learn by doing and build a mental model.

More on our [teaching method](https://reactgraphql.academy/blog/react-graphql-academy-teaching-method/)

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/reactgraphqlacademy/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout graphql-apollo && cd graphql-apollo && npm i
```

```sh
 npm start
```

## Exercise part 1

### 🥑 Before we start

- TODO EXPLAIN KEY KNOWLEDGE HERE FOR THIS EXERCISE

- [ ] 1. The profile page (http://localhost:3000/profile) should display the fullname of the user on the form input labeled "fullname" (right below the image). The fullname is not displayed on the input because of a bug 🐛. Your task is to fix it.
- [ ] 2. The profile page should display the name of the company on the form input labeled "Company" (right below the fullname). This feature is not implemented. You'll need to:
  - [ ] 2.1. Write the query to get the company that the user works for. I recommend you to write and test it first on Playground (http://localhost:3000/graphql)
  - [ ] 2.2. Tranform the query into an AST using the `gql` function
  - [ ] 2.3. Use the useQuery hook from Apollo.

## Articles and links

- [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm/related)
- [Updating the cache after a mutation](https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-after-a-mutation)
- [Using fragments - Apollo docs](https://www.apollographql.com/docs/react/data/fragments)
- [Batching Client GraphQL Queries by Apollo](https://www.apollographql.com/blog/batching-client-graphql-queries-a685f5bcd41b)
- [Explaining GraphQL Connections by Apollo](https://dev-blog.apollodata.com/explaining-graphql-connections-c48b7c3d6976)
- [http://graphql.org/learn/](http://graphql.org/learn/)
- [Thinking in Graphs](http://graphql.org/learn/thinking-in-graphs/)
- [GraphQL vs. REST](https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b)
- [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
