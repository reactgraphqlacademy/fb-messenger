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

```sh
 git checkout SSR-part2
 ```

* Copy & paste public/index.html into src/server/render.js, then `npm start` the project, and navigate to [http://localhost:8888](http://localhost:8888).
* How do you fix the following error “Invariant Violation: Browser history needs a DOM”? Hint: replace BrowserRouter by ServerRouter on the server.
* Add a &lt;script&gt; to the bundle.js at the bottom of the &lt;body&gt; in src/server/render.js.
* In src/server/render.js add the bodyHTML from renderToString in the html element that is the root of the React app.  
* (With JS enabled) If you navigate to [http://localhost:8888/crazypeacock512](http://localhost:8888/crazypeacock512), there is a warning that says “Warning: Text content did not match. Server: "Threads" Client: "Conversation with "”. To fix it, you need to add a prop location={req.url} to the router in src/server/index.js.
* In src/client/index `hydrate` the component tree instead of `render` it.
* If you disable JS, can you see any Thread or Conversation? Why is that? how can we fix it?

### Exercise part 3

```sh
 git checkout SSR-part3
 ```

* Redux
  * In src/server/app.js configure the Redux store with initialState.

* Styled Components
  * In src/server/app.js use [&lt;StyleSheetManager&gt;](https://www.styled-components.com/docs/advanced#server-side-rendering).
  * In src/server/render.js use [sheet.getStyleTags()](https://www.styled-components.com/docs/advanced#server-side-rendering).

* GraphQL
  * In src/server/app.js you need to use [getDataFromTree](https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree) to execute the GraphQL queries in order to get data in the components.
  * In src/server/render.js you need to add [window.__APOLLO_STATE](https://github.com/apollographql/react-docs/blob/master/source/server-side-rendering.md) to sync the state on the server and on  the client.
  * In src/client/index you need to [rehydrate the store](https://www.apollographql.com/docs/react/features/server-side-rendering.html#store-rehydration)

### Bonus

* Do we have to do initialize the Redux state in src/client/index with the same state than in src/server/app.js?

## Links

* [https://medium.com/leanjs/universal-create-react-app-step-by-step-b80ba68d125d](https://medium.com/leanjs/universal-create-react-app-step-by-step-b80ba68d125d)
* [https://dev-blog.apollodata.com/](https://dev-blog.apollodata.com/)
* [http://dev.apollodata.com](http://dev.apollodata.com)
* [https://nextjs.org/](https://nextjs.org/)
* [https://github.com/jaredpalmer/after.js](https://github.com/jaredpalmer/after.js)

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html).
