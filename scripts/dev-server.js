const path = require('path')
const koa = require('koa')
/** Development server middleware */
const devMiddleware = require('koa-webpack-middleware').devMiddleware
const hotMiddleware = require('koa-webpack-middleware').hotMiddleware
/** This is required do to a bug in koa-webpack-middleware */
const babelPolyfill = require('babel-polyfill')
/** Serve static files on koa*/
const serve = require('koa-static')

const webpack = require('webpack')
const config = require('./webpack.config.dev')
/** The server functions */
var app = new koa()
const compile = webpack(config)
// Configure webpack
app.use(devMiddleware(compile, {
  // display no info to console (only warnings and errors)
  noInfo: false,

  // display nothing to the console
  quiet: false,

  // switch into lazy mode
  // that means no watching, but recompilation on every request
  lazy: false,

  // watch options (only lazy: false)
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },

  // public path to bind the middleware to
  // use the same as in webpack
  publicPath: "/scripts/",

  // custom headers
  headers: { "X-Custom-Header": "yes" },

  // options for formating the statistics
  stats: {
    colors: true
  }
}))

app.use(hotMiddleware(compile, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))

// Serve the public folder
app.use(serve(path.join(__dirname, '../public')))
app.listen(2333)
