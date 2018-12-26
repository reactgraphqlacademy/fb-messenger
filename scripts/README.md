# For a better and easier approach check [https://github.com/reactjsacademy/react-scripts-ssr](https://github.com/reactjsacademy/react-scripts-ssr)

## Create React App (CRA) version 1 ejected

This document lists the changes made in a CRA version 1 to make it server-side rendering (SSR). Heads up! this CRA has been ejected in order to make these changes. Ejecting your CRA is not recommended. This CRA has been ejected for teaching purposes about how CRA works. For real-world server-side rendering projects use [https://github.com/reactjsacademy/react-scripts-ssr](https://github.com/reactjsacademy/react-scripts-ssr)

## scripts/start.js changes

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

## Webpack changes

- In config/paths.js, edit the file and add the following line after `appBuild`:

  `serverBuild: resolveApp('build/server'),`

- In config/paths.js, edit the following export key `appIndexJs` to be:

  `appIndexJs: resolveApp('src/client/index.js'),`

- In config/paths.js, edit the file and add the following line after `appIndexJs`:

  `serverIndexJs: resolveApp('src/server/index-dev.js'),`

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
