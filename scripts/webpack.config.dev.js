const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    blog: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/Blog'
    ]
  },
  output: {
    path: path.join(__dirname, '../public/scripts'),
    filename: '[name].js',
    publicPath: '/scripts/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  }
}
