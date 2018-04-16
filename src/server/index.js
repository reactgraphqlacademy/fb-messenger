import https from 'https'
import setupServer from './server/setupServer'
import fs from 'fs'
import express, { Router } from 'express'
import path from 'path'
import compression from 'compression'

const middlewares = [
  compression(),
  Router().use('/', express.static(path.join(process.cwd(), 'public/')))
]

const app = setupServer({ middlewares })

const httpsServer = https
  .createServer(
  {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt')
  },
    app
  )
  .listen('production_port', 'production_host_name', () => {
    const { address, port } = httpsServer.address()
    console.log(`Running an Express server at https://${address}:${port}`)
  })
