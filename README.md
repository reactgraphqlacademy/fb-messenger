# ReactJS Facebook messenger

The goal of this exercise is to learn how to do Server-Side Rendering (SSR) in React using Redux, GraphQL, and Styled-Components.

## To get started

### Step 1

If you haven't already set up your project, head here and follow the instructions https://github.com/leanjscom/fb-messenger/blob/master/README.md

### Step 2

```sh
 git checkout SSR-part1
```

### Step 3

```sh
 npm i
```

## Exercise

### Part 1

- Navigate to [http://localhost:8888](http://localhost:8888). How do you fix the following error “Invariant Violation: Browser history needs a DOM”? Hint: replace BrowserRouter by StaticRouter on the server.
- Copy & paste public/index.html into src/server/render.js, then `npm start` the project, and navigate to [http://localhost:8888](http://localhost:8888). Heads up! there are comments in public/index.html using back ticks (\`) so it escapes the string literal of src/server/render.js. Remove the comments in the new src/server/render.js after you copied the index.html
- In src/server/render.js add the bodyHTML from renderToString in the html element that is the root of the React app.
- Add a &lt;script&gt; to the bundle.js at the bottom of the &lt;body&gt; in src/server/render.js.
- (With JS enabled) If you navigate to [http://localhost:8888/crazypeacock512](http://localhost:8888/crazypeacock512), there is a warning that says “Warning: Text content did not match. Server: "Threads" Client: "Conversation with "”. To fix it, you need to add a prop location={req.url} to the router in src/server/index.js.
- In src/client/index `hydrate` the component tree instead of `render` it.
- If you disable JS, can you see any Thread or Conversation? Why is that? how can we fix it?

### Exercise part 2

```sh
 git checkout SSR-part2
```

- Redux

  - In src/server.js configure the Redux store with initialState.

- Styled Components

  - In src/server.js use [&lt;StyleSheetManager&gt;](https://www.styled-components.com/docs/advanced#server-side-rendering).
  - In src/server.js use [sheet.getStyleTags()](https://www.styled-components.com/docs/advanced#server-side-rendering).

- GraphQL

  - In src/server.js you need to use [getDataFromTree](https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree) to execute the GraphQL queries in order to get data in the components.
  - In src/index.js you need to restore the state from `window.__PRELOADED_STATE__` in `cache: new InMemoryCache().restore()` to sync the state on the server and client. Heads up, [https://www.apollographql.com/docs/react/features/server-side-rendering.html#store-rehydration](https://www.apollographql.com/docs/react/features/server-side-rendering.html#store-rehydration) calls it `window.__APOLLO_STATE__`, we call it `window.__PRELOADED_STATE__`

- React Helmet

  - In src/server.js you need to use [helmet.link.toString()](https://github.com/nfl/react-helmet#server-usage) to set the linkHelmet variable so it can be passed as a meta to the next middleware.

### Bonus part 2

- Do we have to do initialize the Redux state in src/client/index with the same state than in src/server/app.js? Hint: [https://github.com/reduxjs/redux/tree/master/examples/universal](https://github.com/reduxjs/redux/tree/master/examples/universal)

## Links

- [https://medium.com/leanjs/universal-create-react-app-step-by-step-b80ba68d125d](https://medium.com/leanjs/universal-create-react-app-step-by-step-b80ba68d125d)
- [https://dev-blog.apollodata.com/](https://dev-blog.apollodata.com/)
- [http://dev.apollodata.com](http://dev.apollodata.com)
- [https://nextjs.org/](https://nextjs.org/)
- [https://github.com/jaredpalmer/after.js](https://github.com/jaredpalmer/after.js)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
