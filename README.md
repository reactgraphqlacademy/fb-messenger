# ReactJS Facebook messenger

The goal of this exercise is to learn how to use GraphQL queries and mutations using Apollo client.

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

#### Configure Webpack

- In config/paths.js, edit the file and add the following line after `appBuild`:
  ```serverBuild: resolveApp('build/server'),```
- In config/paths.js, edit the following export key `appIndexJs` to be:
  ```appIndexJs: resolveApp('src/client/index.js'),```
- In config/paths.js, edit the file and add the following line after `appIndexJs`:
    ```serverIndexJs: resolveApp('src/server/index-dev.js'),```
- Copy webpack.config.dev.js and name it webpack.config.server.base.js
- In webpack.config.server.base.js, comment line 48: require.resolve('react-dev-utils/webpackHotDevClient'),
- In webpack.config.server.base.js, replace in the entry `paths.appIndexJs` for `paths.serverIndexJs`
- In webpack.config.server.base.js, comment the `ouput`. We are setting the output in webpack.config.server.js
- In webpack.config.server.base.js, comment the `plugin` ModuleScopePlugin. This is because the fake api needs to import mocks from public/static/mocks.
- In webpack.config.server.base.js, replace the module.rules `test: /\.css$/,` by:
```
{
  test: /\.css$/,
  use: [
    'isomorphic-style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1
      }
    }
  ]
},
```
- In webpack.config.server.base.js, comment all the plugins:

#### Edit scripts/start.js

Make the following edits in scripts/start.js :
- `const { exec } = require('child_process')` at the beginnig of the file
- Replace this line `const compiler = createCompiler(webpack, config, appName, urls, useYarn);` with `const compiler = webpack(config)`
- Replace
```
if (isInteractive) {
  clearConsole();
}
console.log(chalk.cyan('Starting the development server...\n'));
openBrowser(urls.localUrlForBrowser);
```
with
```
process.env.REACT_APP_CLIENT_PORT = port
process.env.REACT_APP_SERVER_PORT = 8888
const configWebpackServer = require('../config/webpack.config.server')
const compiler = webpack(configWebpackServer)
const urls = prepareUrls(protocol, HOST, process.env.REACT_APP_SERVER_PORT)
let isServerRunning

compiler.watch({}, (err, stats) => {
  if (err) console.log('error on webpack server', err)

  if (!isServerRunning) {
    isServerRunning = true
    const nodemon = exec(
      'nodemon --watch build/server build/server/index.js build/server/index.js'
    )

    // This is to outpout in the terminal the child process
    nodemon.stdout.on('data', (data) => {
      console.log(data.toString())
    })
    nodemon.on('exit', (code) => {
      console.log(`nodemon process exited with code ${code.toString()}`)
    })

    console.log(chalk.yellow(`Starting the server on port ${process.env.REACT_APP_SERVER_PORT}...\n`))
    setTimeout(
      () => {
        openBrowser(urls.localUrlForBrowser)
      },
      1000
    )
  }
})
```
### Exercise part 2

* How do you fix the following error “Invariant Violation: Browser history needs a DOM
”? Hint: replace BrowserRouter by ServerRouter on the server
* Copy & paste public/index.html into src/server/render.js
* Add a script to the bundle.js at the bottom of the <body> in src/server/render.js
* In src/server/render.js Add the bodyHTML from renderToString in the html element that is the root of the React app  
* (With JS enabled) If you navigate to [http://localhost:8888/crazypeacock512](http://localhost:8888/crazypeacock512), there is a warning that says “Warning: Text content did not match. Server: "Threads" Client: "Conversation with "”. To fix it, you need to add a prop location={req.url} to the router in src/server/index.js
* hydrate instead of render
* If you disable JS, can you see any Thread or Conversation? Why is that? how can we fix it?

### Exercise part 3

```sh
 git checkout SSR
 ```
 
* React
  * src/server/render.js bodyHTML = renderToString
  * src/server/render.js  ...src="${bundleUrl}"></script>

* Redux
  * src/server/app.js configure store initialState

* Style Components
  * src/server/app.js <StyleSheetManager>
  * src/server/render.js sheet.getStyleTags()

* GraphQL
  * src/server/app.js getDataFromTree
  * src/server/app.js add fetch to link: createHttpLink({ uri: `${API_BASE_URL}/graphql` }),
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
