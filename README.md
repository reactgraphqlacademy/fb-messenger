# GraphQL Apollo Client

This exercise is part of the [React GraphQL Academy](http://reactgraphql.academy) training material.

## Our eaching method

1. Collaborative learning environment & pair programming.
   - Rooms with small groups
   - Work with your peers, discuss, help each other.
2. We try to foster critical thinking.
   - ⬆️ Discovery ⬇️ Instruction
3. We don’t explain everything you need to know before the exercise:
   - The exercise is meant to help you come up with conclusions.
   - Learn by doing and build a mental model.

More on our [teaching method](https://reactgraphql.academy/blog/react-graphql-academy-teaching-method/)

## Learning objectives

- Learn how to build data-driven React applications colocating data requirements close to the components
- Understand the value of using a GraphQL client to keep the state of the application consistent
- Comprehend the different features that Apollo Client provides to improve performance and the tradeoffs of each approach.

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

The `useQuery` React hook is the primary API for executing GraphQL queries with Apollo Client. When your component renders, `useQuery` returns an object from Apollo Client that contains `loading`, `error`, and `data` properties you can use to render your UI. Example:

```JavaScript
import gql from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_DOG = gql`
  query getDogName(id: ID!) {
    dog(id: 1) {
      name
    }
  }
`;

function Dog({ id }) {
  const { loading, error, data } = useQuery(GET_DOG,{
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return <p>🐶 name: ${data.dog.name}</p>
}
```

### Tasks

- [ ] 1. The profile page (http://localhost:3000/profile) should display the fullname of the user in the form input labeled "fullname" (right below the image). The fullname is not displayed on the input because of a bug 🐛. Your task is to fix it. 🕵️‍♀️Hint, the bug is in this file `src/user/Profile.js`.

2. The profile page should display the name of the company on the form input labeled "Company" (right below the fullname). This feature is not implemented. You'll need to:

- [ ] 2.1. Write a GraphQL query to get the company the user works for. Write and test the query on Playground (http://localhost:3000/graphql). You can finish and use the following query:

```graphql
query work {
  # 🚧 ⬆️ you need to add some argument to the query
  work(userId: $userId) {
    company
    id
  }
}
```

You can get your user id executing the following query:

```graphql
query {
  viewer {
    id
  }
}
```

- [ ] 2.2. In `src/user/Work.js`, using the `gql` function, transform the query from the previous step from a string to something (called AST) that can be passed to the useQuery hook (next step). 🕵️‍♀️Hint, we also did that in `src/user/Profile.js`.
- [ ] 2.3. [Execute](https://www.apollographql.com/docs/react/data/queries/#executing-a-query) the query from the previous step using the useQuery hook from Apollo. 🕵️‍♀️ Hint, it's very similar to the implementation of the `fullname` in `src/user/Profile`. There is one difference though, in this case, you need to pass the userId to the useQuery using a configuration option ([variables](https://www.apollographql.com/docs/react/data/queries/#usequery-api)).

### 🏋️‍♀️ Bonus exercise

- Bonus 1. We mentioned in the exercise "transform the query from the previous step from a string to something (called **AST**). What is an AST? Why do you think using an AST is better than using plain text? You might want to use this website https://astexplorer.net/ to explore any of the queries you wrote.
- Bonus 2. 🤔 You might have spotted that there is a better query to get the company of the user. Our current implementation is a bit naive. No worries, we are going to refactor our implementation in a bit and make some improvements as we build up our GraphQL knowledge. Meanwhile, try to think about how we could improve our current implementation. 🕵️‍♀️Hint, we need to start by changing the query.

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
