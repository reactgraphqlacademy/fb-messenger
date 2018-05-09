'use strict'

const paths = require('./paths')
const base = require('./webpack.config.server.base')

const config = Object.assign({}, base)

config.target = 'node'
config.entry = './src/server/index'
config.output = {
  path: paths.serverBuild,
  filename: 'index.js',
  publicPath: '/'
}

config.node = {
  console: false,
  global: false,
  process: false,
  Buffer: false,
  __filename: false,
  __dirname: false,
  setImmediate: false
}

module.exports = config
