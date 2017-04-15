const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    blog: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist/scripts'),
    filename: '[name].js',
    publicPath: '/scripts/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          'env': {
            'development': {
              'presets': ['react-hmre']
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  }
}
